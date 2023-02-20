import { ButtonUI } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { fetchCityByName } from 'services/citySearchAPI';
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

export const SearchForm = () => {
  const [city, setCity] = useState('');
  const [flag, setFlag] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');
  const [isHideSuggs, setIsHideSuggs] = useState(false);

  useEffect(() => {
    if (!city) {
      hideSuggs();
    }
  }, [city]);

  const handleSubmit = event => {
    event.preventDefault();
    //    dispatch(addContact({ name, number }));
    resetForm();
  };

  const handleCityChange = async e => {
    setCity(e.target.value);
    setIsHideSuggs(false);

    if (!city) return;

    const res = await fetchCityByName(city);

    !autocompleteCities.includes(e.target.value) &&
      res &&
      setAutocompleteCities(
        res.map(place => {
          if (place.admin1) {
            return `${place.name}, ${place.admin1}`;
          }
          return `${place.name}`;
        })
      );
    setFlag(res.map(place => place.country_code.toLowerCase()));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr('');
  };

  const hideSuggs = value => {
    setIsHideSuggs(true);
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
            Your city
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
          <DataList style={{ display: isHideSuggs ? 'none' : 'block' }}>
            {autocompleteCities.map((item, idx) => (
              <Option
                key={'' + item + idx}
                onClick={() => {
                  hideSuggs(item);
                  setCity(item);
                }}
              >
                <img
                  src={`https://hatscripts.github.io/circle-flags/flags/${flag[idx]}.svg`}
                  width="30"
                  alt="flag"
                />

                <CityName>{item} </CityName>
              </Option>
            ))}
          </DataList>
          <PlacesAutocompleteHint>
            *start typing and choose your city from the given options
          </PlacesAutocompleteHint>
          <ButtonUI type="submit" text="Submit" />
        </InputWrap>
      </PlacesAutocomplete>
    </Form>
  );
};
