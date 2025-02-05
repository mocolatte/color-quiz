function calculateResult() {
  const skinTone = document.getElementById('skinTone').value;
  const hairColor = document.getElementById('hairColor').value;
  const eyeColor = document.getElementById('eyeColor').value;
  
  let season = '';
  
  // Simple logic:
  // 1) If skinTone is warm => user is Spring or Autumn
  // 2) If skinTone is cool => user is Summer or Winter
  // 3) If neutral => guess based on hair/eye color.

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
    // Neutral
    if (hairColor.includes('light') || eyeColor.includes('blue')) {
      season = 'Summer';
    } else {
      season = 'Autumn (Fall)';
    }
  }
  
  document.getElementById('result').textContent = `Your best match is: ${season}!`;
}

