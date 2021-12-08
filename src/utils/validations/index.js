import {
  EMAIL_REGEX,
  CONTROL_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  FIRST_LAST_NAME_MAX_LENGTH,
} from '../constants';

function validations(control, value) {
  const errors = {};
  if (!value) {
    errors[control] = `${control} is required!`;
    return;
  }

  switch (control) {
    case 'username':
      if (isLessThan(value, CONTROL_MIN_LENGTH)) {
        errors[control] = `${control} too short!`;
      } else if (isGreaterThan(value, USERNAME_MAX_LENGTH)) {
        errors[control] = `${control} too long!`;
      }
      break;

    case 'password':
      if (isLessThan(value, PASSWORD_MIN_LENGTH)) {
        errors[control] = `${control} too short!`;
      } else if (isGreaterThan(value, PASSWORD_MAX_LENGTH)) {
        errors[control] = `${control} too long!`;
      }
      break;

    case 'firstName':
    case 'lastName':
      if (isLessThan(value, CONTROL_MIN_LENGTH)) {
        errors[control] = `${control} too short!`;
      } else if (isGreaterThan(value, FIRST_LAST_NAME_MAX_LENGTH)) {
        errors[control] = `${control} too long!`;
      }
      break;

    case 'email':
      if (!EMAIL_REGEX.test(value)) {
        errors[control] = `${control} invalid format!`;
      }
      break;
  }

  return errors;
}

const isLessThan = (value, amount) => value?.length <= amount;
const isGreaterThan = (value, amount) => value?.length >= amount;

export { validations };
