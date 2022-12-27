export default class Validator {
  static validateTelephoneNumber(number) {

    const validateNumber = number.split(/[^\d]+/g).join('');
    return `+${
      validateNumber.length === 11
        ? '7'.concat(validateNumber.slice(1))
        : validateNumber
    }`;
  }
}
