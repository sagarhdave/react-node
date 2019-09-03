/*
 * Information Messages
 *
 * This contains all the text for the Information component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Information';

export default defineMessages({
  informationText: {
    id: `${scope}.informationText`,
    defaultMessage: 'Please Enter Your Email Address And Password',
  },
});
