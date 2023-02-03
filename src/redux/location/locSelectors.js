export const getCityId = state => state.location.cityID;
export const getCityName = state => state.location.city;
export const getCityImages = state => state.location.image;
export const getCurrentLongitude = state => state.location.longitude;
export const getCurrentLatitude = state => state.location.latitude;
export const getCurrentWeather = state => state.location.weather;
export const getAdditionalCurrentWeather = state =>
  state.location.weatherAdditional;
export const getTimezone = state => state.location.timezone;
export const getAstroData = state => state.location.astrodata;
