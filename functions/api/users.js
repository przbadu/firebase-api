const firebase = require('firebase');
const Joi = require('@hapi/joi');

const { db } = require('../utils/admin');

const signUp = async (req, res) => {
  try {
    // get all params from request
    const params = req.body;
    let errors = {};

    // validations
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
      confirmPassword: Joi.ref('password'),
      fullName: Joi.string().required(),
      companyName: Joi.string().required(),
    });

    // format JOI error to make it user friendly
    const { error } = schema.validate(params);
    if (error) {
      error.details.forEach((detail) => {
        errors[detail.path[0]] = detail.message;
      });
      return res.status(422).json(errors);
    }

    // check if email already exists
    const doc = await db.doc(`/users/${params.email}`).get();
    // return validation error
    if (doc.exists) return res.status(400).json({ email: 'already taken' });

    // sign up
    const auth = await firebase
      .auth()
      .createUserWithEmailAndPassword(params.email, params.password);

    // get idToken from user
    const uid = auth.user.uid;
    const token = await auth.user.getIdToken();

    // create new users collection and link with authenticated user
    const userParams = {
      email: params.email,
      fullName: params.fullName,
      companyName: params.companyName,
      createdAt: new Date().toISOString(),
      userId: uid,
    };
    // store in users collection
    db.doc(`/users/${params.email}`).set(userParams);

    // return token in response
    return res.status(201).json({ token });
  } catch (e) {
    // customize duplicate email validation
    if (e.code === 'auth/email-already-in-use')
      return res.status(400).json({ email: 'is already taken' });
    else return res.status(400).json(e.message);
  }
};

module.exports = { signUp };
