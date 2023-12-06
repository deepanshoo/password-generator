class PasswordGenerator {
    constructor() {
      this.lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      this.uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.numberChars = '0123456789';
      this.specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
      this.allChars =
        this.lowercaseChars + this.uppercaseChars + this.numberChars + this.specialChars;
    }
  
    generatePassword(length, options = {}) {
      const {
        includeLowercase = true,
        includeUppercase = true,
        includeNumbers = true,
        includeSpecialChars = true,
      } = options;
  
      let chars = '';
  
      if (includeLowercase) chars += this.lowercaseChars;
      if (includeUppercase) chars += this.uppercaseChars;
      if (includeNumbers) chars += this.numberChars;
      if (includeSpecialChars) chars += this.specialChars;
  
      if (!chars) {
        console.error('No character set selected for password generation.');
        return null;
      }
  
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
  
      return password;
    }
  }

  
const passwordGenerator = new PasswordGenerator();
const password = passwordGenerator.generatePassword(12, {
  includeLowercase: true,
  includeUppercase: true,
  includeNumbers: true,
  includeSpecialChars: true,
});

console.log(password);
