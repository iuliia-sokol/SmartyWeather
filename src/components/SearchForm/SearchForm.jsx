import { ButtonUI } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAirQuality,
  fetchAstroDataFromWeatherApi,
  fetchCity,
  fetchCurrentWeather,
  fetchCurrentWeatherFromWeatherApi,
  fetchPexelsImage,
  fetchWeatherForecastFromWeatherApi,
} from 'redux/location/locOperations';
import { setLatitude, setLongitude } from 'redux/location/locSlice';
import { fetchCityByName } from 'services/citySearchAPI';
import { FLAGS_URL } from 'utils/consts/consts';
import {
  CityName,
  DataList,
  Form,
  Input,
  InputError,
  InputWrap,
  Label,
  Option,
  PlacesAutocomplete,
  PlacesAutocompleteHint,
} from './SearchForm.styled';

export const SearchForm = ({
  elementRef,
  hideSuggs,
  isHideSuggs,
  setIsHideSuggs,
  setSelection,
}) => {
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [timezone, setTimezone] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!city) {
      hideSuggs();
    }
  }, [city, hideSuggs]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!selectedCity) {
      console.log('Select city');
    }
    if (selectedCity) {
      dispatch(setLatitude(lat));
      dispatch(setLongitude(long));
      dispatch(fetchCity({ lat, long }));
      dispatch(fetchAstroDataFromWeatherApi({ lat, long }));
      dispatch(fetchCurrentWeatherFromWeatherApi({ lat, long }));
      dispatch(fetchWeatherForecastFromWeatherApi({ lat, long }));
      dispatch(fetchCurrentWeather({ lat, long, timezone }));
      dispatch(fetchAirQuality({ lat, long, timezone }));
      dispatch(fetchPexelsImage(city));
      setSelection(true);
    }

    resetForm();
  };

  const handleCityChange = async e => {
    setCity(e.target.value);
    setIsHideSuggs(false);

    if (!city) return;

    const res = await fetchCityByName(city);
    // console.log(res);
    !autocompleteCities.includes(e.target.value) &&
      res &&
      setAutocompleteCities(
        res.map(place => {
          if (place.admin1) {
            return {
              city: place.name,
              region: place.admin1,
              country: place.country_code.toLowerCase(),
              latitude: place.latitude,
              longitude: place.longitude,
              timezone: place.timezone,
            };
          }
          return {
            city: place.name,
            region: '',
            country: place.country_code.toLowerCase(),
            latitude: place.latitude,
            longitude: place.longitude,
            timezone: place.timezone,
          };
        })
      );
    if (res && res.error) {
      setAutocompleteErr(res.error);
    }
  };

  const resetForm = () => {
    setCity('');
    setAutocompleteCities([]);
    setAutocompleteErr('');
    hideSuggs();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PlacesAutocomplete>
        <InputWrap>
          <Label>
            {autocompleteErr && <InputError>{autocompleteErr}</InputError>}
          </Label>
          <Input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            autoComplete="off"
            placeholder="Start typing your city name"
          />
          <DataList
            style={{ display: isHideSuggs ? 'none' : 'block' }}
            ref={elementRef}
          >
            {autocompleteCities.map((item, idx) => (
              <Option
                key={'' + item + idx}
                onClick={() => {
                  hideSuggs(item.city);
                  setCity(item.city);
                  setLat(item.latitude);
                  setLong(item.longitude);
                  setTimezone(item.timezone);
                  setSelectedCity(true);
                }}
              >
                <img
                  src={`${FLAGS_URL}${item.country}.svg`}
                  width="30"
                  alt="flag"
                />

                <CityName>
                  {item.city}, {item.region}
                </CityName>
              </Option>
            ))}
          </DataList>
          <PlacesAutocompleteHint>
            *start typing and choose your city from the given options
          </PlacesAutocompleteHint>
          <ButtonUI type="submit" text="Submit" color="white" />
        </InputWrap>
      </PlacesAutocomplete>
    </Form>
  );
};