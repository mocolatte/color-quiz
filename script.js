function calculateResult() {
  const skinTone = document.getElementById('skinTone').value;
  const hairColor = document.getElementById('hairColor').value;
  const eyeColor = document.getElementById('eyeColor').value;

  // Simple logic:
  // 1) If skinTone is warm => user is Spring or Autumn
  // 2) If skinTone is cool => user is Summer or Winter
  // 3) If neutral => guess based on hair/eye color.

  let season = '';

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
  
  // Display the result text
  document.getElementById('result').textContent = `Your best match is: ${season}!`;

  // Display the corresponding season image
  const seasonImageDiv = document.getElementById('seasonImage');
  seasonImageDiv.innerHTML = ''; // Clear previous image if any

  // Map each season to an image (placeholder URLs; replace with your own images if desired)
  const seasonImages = {
    'Spring': 'https://images.pexels.com/photos/35600/road-forest-season-forest.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    'Autumn (Fall)': 'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'Summer': 'https://images.pexels.com/photos/1230347/pexels-photo-1230347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'Winter': 'https://images.pexels.com/photos/818433/pexels-photo-818433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  };

  // If we have a valid season, show the image
  if (seasonImages[season]) {
    const img = document.createElement('img');
    img.src = seasonImages[season];
    img.alt = `${season} image`;
    seasonImageDiv.appendChild(img);
  }
}
