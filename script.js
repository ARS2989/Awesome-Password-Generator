function generatePassword(length) {
    // Define possible characters
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    
    // Create empty password string
    let password = "";
  
    // Generate random characters until desired length is reached
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    // Return generated password
    return password;
  }
  
  // Example usage: generate a 12-character password
  const password = generatePassword(12);
  console.log(password);
  
