# smartyWeather

SmartyWeather App, built using React.JS, is a web-based application that can
monitor the entire weather condition of wherever the user happened to be.

This simple weather app is not only visually attractive, but also can be really
helpful to user's daily living. The App deals with a reliable weather condition
and data on weather which is accurate and can be helpful for monitoring the
condition of the weather outside or any specific place.

In addition, user can easily explore what happened today in history around the
world, including major events on crime, politics and more, in one single click.

Implemented user stories:

- User can view the weather in his/her current location. The app can find the
  device’s location coordinates (longitude and latitude), if this option is
  enabled on user's device and allowed by user's browser. The page will ask for
  access to the user's location on load to update weather information. By
  default (if geolocation services are disabled) the App displays the local
  weather at Dnipro city, Ukraine.

- Background image changes depending on user's location (or selected location)
  and current weather conditions.

- Weather icon changes depending on daytime and weather conditions.

- User can search for weather information of other places.

- User can get historical data for today's date.

NOTE: For better user experience run the App on your desktop, when the weather
is not friendly: it's raining cats and dogs, snowing etc. This way you can
experience beautifull animated background effects. Enjoy =)

## Authors

The project (from design to code) was created by me.

## Features

- 100% responsive
- Unique & creative design
- Visually appealing, crisp graphics
- Animated live weather conditions backgrounds
- Cross platform
- Funny and easy to use
- Provides complete weather, astronomy and air quality data for the selected
  place + historical data for current date

## Tech Stack

**Back** Swagger (https://byabbe.se/on-this-day/), Weather API, Open-meteo API,
Google Places API, Pexels API

**Front:** React, Redux

**Libs:** Axios, Recharts, React-geocode, React-geolocated, React-scroll-up,
Notiflix, React-rainfall-animation, React-snowfall

## Run Locally

To check it out locally, clone the repository to your machine, open it in CLI
(VScode etc) and install it with npm:

```bash
  git clone https://github.com/iuliia-sokol/smartyWeather
```

Go to the project directory

```bash
  cd  `name of your local folder`
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
npm start

```

## Environment Variables

To run this project, you will need to add the following environment variables to
your .env file

REACT_APP_MAP_API_KEY="" /get it here:
https://developers.google.com/maps/documentation/places/web-service/get-api-key/

REACT_APP_PEXELS_API_KEY="" /get it here:
https://www.pexels.com/api/documentation/#authorization/

REACT_APP_WEATHER_API_KEY="" /get it here:
https://www.weatherapi.com/signup.aspx/

## Acknowledgements

- [Weather API](https://www.weatherapi.com/)
- [Open-meteo API](https://open-meteo.com/)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Pexels API](https://www.pexels.com/api/documentation/)
- [Historical data API](https://byabbe.se/on-this-day/)
- [Country flags](https://github.com/HatScripts/circle-flags)
- [Recharts](https://recharts.org/en-US)
- [React-geocode](https://www.npmjs.com/package/react-geocode)
- [React-geolocated](https://www.npmjs.com/package/react-geolocated)
