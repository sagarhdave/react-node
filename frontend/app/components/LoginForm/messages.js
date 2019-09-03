/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm';

export default defineMessages({
  emailAddress: {
    id: `${scope}.emailAddress`,
    defaultMessage: 'Email Address',
  },
  inputEmail: {
    id: `${scope}.inputEmail`,
    defaultMessage: 'Enter the email address',
  },
  accessCode: {
    id: `${scope}.accessCode`,
    defaultMessage: 'Access code',
  },
  nextText: {
    id: `${scope}.nextText`,
    defaultMessage: 'Next',
  },
  backText: {
    id: `${scope}.backText`,
    defaultMessage: 'Back',
  },
  inputPassowrd: {
    id: `${scope}.inputPassowrd`,
    defaultMessage: 'Enter the password',
  },
  inputLogin: {
    id: `${scope}.inputLogin`,
    defaultMessage: 'Log in',
  },
});
