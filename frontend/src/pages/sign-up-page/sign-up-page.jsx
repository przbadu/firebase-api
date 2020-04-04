import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// material icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

// style
import { useStyle } from './sign-up.styles';

export default () => {
  const classes = useStyle();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5' component='h1'>
          Sign In
        </Typography>

        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Full Name'
            autoFocus
            name='fullName'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Company Name'
            name='companyName'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email address'
            name='email'
            autoComplete='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            name='password'
            type='password'
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            variant='contained'
            fullWidth
            component={RouterLink}
            to='/sign_in'
          >
            Already have an account? Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};
