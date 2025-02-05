function calculateResult() {
  const skinTone = document.getElementById('skinTone').value;
  const hairColor = document.getElementById('hairColor').value;
  const eyeColor = document.getElementById('eyeColor').value;
  
  let season = '';
  
  // Basic, simplified logic for demonstration
  if (skinTone === 'warm') {
    if (hairColor.includes('light') || eyeColor.includes('green')) {
      season = 'Spring';
    } else {
      season = 'Autumn (Fall)';
    }
  } else if (skinTone === 'cool') {
    if (hairColor.includes('light') || eyeColor.includes('blue')) {
      season = 'Summer';
    } else {
      season = 'Winter';
    }
  } else {
    // Neutral, guess based on hair/eye
    if (hairColor.includes('light') || eyeColor.includes('blue')) {
      season = 'Summer';
    } else {
      season = 'Autumn (Fall)';
    }
  }
  
  document.getElementById('result').textContent = `Your best match is: ${season}!`;
}
