# What is this?

Generate password of desired length which can help to create multiple dummy users for server-side testing and more.

# Installation

`npm i password-generator --save`

# Demo usage

import {password-generator} from 'password-generator'

const passwordGenerator = new PasswordGenerator();
const password = passwordGenerator.generatePassword(12, {
  includeLowercase: true,
  includeUppercase: true,
  includeNumbers: true,
  includeSpecialChars: true,
});

console.log(password);

# Options 

Password-generator supports 8 options 

- *includeLowercase* - true/false (Defaults to true)
- *includeUppercase* - true/false (Defaults to true)
- *includeNumbers* - true/false (Defaults to true)
- *includeSpecialChars* - true/false (Defaults to true)