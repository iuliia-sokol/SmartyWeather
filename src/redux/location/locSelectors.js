export const getCityId = state => state.location.cityID;
export const getCityName = state => state.location.city;
export const getCountry = state => state.location.country;
export const getCityImages = state => state.location.image;
export const getCurrentLongitude = state => state.location.longitude;
export const getCurrentLatitude = state => state.location.latitude;
export const getCurrentWeather = state => state.location.weather;
export const getAdditionalCurrentWeather = state =>
  state.location.weatherAdditional;
export const getDayTime = state => state.location.daytime;
export const getTimezone = state => state.location.timezone;
export const getAstroData = state => state.location.astrodata;
export const getForcast = state => state.location.weatherForecast;
export const getDailyForcast = state => state.location.weather.daily;
export const getHourlyForcast = state => state.location.weather.hourly;
