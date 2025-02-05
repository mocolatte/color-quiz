function calculateResult() {
  const skinTone = document.getElementById('skinTone').value;
  const hairColor = document.getElementById('hairColor').value;
  const eyeColor = document.getElementById('eyeColor').value;
  
  let season = '';
  
  // Basic logic to determine warm vs cool + light vs dark
  if (skinTone === 'warm') {
    // If your skin tone is warm
    if (hairColor.includes('light') || eyeColor.includes('green')) {
      season = 'Spring';
    } else {
      // For dark or medium warm
      season = 'Autumn (Fall)';
    }
  } else if (skinTone === 'cool') {
    // If your skin tone is cool
    if (hairColor.includes('light') || eyeColor.includes('blue')) {
      season = 'Summer';
    } else {
      // For dark or medium cool
      season = 'Winter';
    }
  } else {
    // Neutral undertone
    // Make a best guess based on hair/eye color
    if (hairColor.includes('light') || eyeColor.includes('blue')) {
      season = 'Summer';
    } else {
      season = 'Autumn (Fall)';
    }
  }
  
  const resultText = `Your best match is: ${season}!`;
  document.getElementById('result').textContent = resultText;
}
