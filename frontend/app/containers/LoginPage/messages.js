/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  loginToTheSystem: {
    id: `${scope}.loginToTheSystem`,
    defaultMessage: 'Log in',
  },
  helmetLoginTitle: {
    id: `${scope}.helmetPaymentTitle`,
    defaultMessage: 'Login · Limkokwing University',
  },
  loginError: {
    id: `${scope}.loginError`,
    defaultMessage: 'Please enter the correct email address',
  },
  passwordError: {
    id: `${scope}.passwordError`,
    defaultMessage: 'Please enter the correct password',
  },
  loginEmpty: {
    id: `${scope}.loginEmpty`,
    defaultMessage: 'Please enter the email address',
  },
  passwordEmpty: {
    id: `${scope}.passwordEmpty`,
    defaultMessage: 'Please enter the password',
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: 'Please try again in a moment',
  },
  loginAttemptError: {
    id: `${scope}.loginAttemptError`,
    defaultMessage: 'Please enter the correct email address or password',
  },
});
