import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// material icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// style
import { useStyle } from './sign-in.styles';

function CopyRight() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link component={RouterLink} color='inherit' to='/'>
        Document Signer
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
            id='email'
            label='Email address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='password'
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
            Sign In
          </Button>
          <Button
            variant='contained'
            fullWidth
            component={RouterLink}
            to='/sign_up'
          >
            Don't have an account yet? Sign up
          </Button>
        </form>
      </div>
    </Container>
  );
};
