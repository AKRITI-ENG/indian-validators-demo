const {
  isValidPhone,
  isValidPincode,
  isValidPAN,
  isValidIFSC,
} = require('@akriti-eng/indian-validators');

console.log('Phone  9876543210  ->', isValidPhone('9876543210'));
console.log('PIN    110001      ->', isValidPincode('110001'));
console.log('PAN    ABCPE1234F  ->', isValidPAN('ABCPE1234F'));
console.log('IFSC   SBIN0001234 ->', isValidIFSC('SBIN0001234'));
console.log('Phone  12345       ->', isValidPhone('12345'));
