// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?/{}~';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    // Generate the random password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  };
  
  // Specify the length of the password
  const passwordLength = 12;
  
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);