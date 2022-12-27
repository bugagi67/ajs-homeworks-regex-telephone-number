import Validator from '../js/Validator';

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('8 (927) 000-00-00');
  expect(received).toBe('+79270000000');
});

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('+7 960 000 00 00');
  expect(received).toBe('+79600000000');
});

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('7 960 000 00 00');
  expect(received).toBe('+79600000000');
});

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('+7 (960) 000 00 00');
  expect(received).toBe('+79600000000');
});

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('+7-960-000-00-00');
  expect(received).toBe('+79600000000');
});

test('validation of entered symbols', () => {
  const received = Validator.validateTelephoneNumber('+86 000 000 0000');
  expect(received).toBe('+860000000000');
});
