export default class Validator {
  validateTelephoneNumber(number) {
    this.number = number;

    const validateNumber = number.split(/[^\d]+/g).join('');
    return `+${
      validateNumber.length === 11
        ? '7'.concat(validateNumber.slice(1))
        : validateNumber
    }`;
  }
}
