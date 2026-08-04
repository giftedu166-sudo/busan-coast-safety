// Copy this file to kma-api-config.js and set the values for your KMA API Hub service.
// Do not commit a real service key to a public GitHub Pages repository.
window.KMA_API_CONFIG = {
  // In production, this should be a Firebase Function or other server proxy URL.
  // It must return normalized JSON: water_temperature, wave_height, wind_speed,
  // apparent_temperature, weather, observed_at.
  proxyUrl: '',
  serviceKey: ''
};
