import { useState } from 'react';
import { fetchCityByName } from 'services/citySearchAPI';
import {
  CityName,
  DataList,
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

  console.log(autocompleteCities);

  const handleCityChange = async e => {
    setCity(e.target.value);
    setIsHideSuggs(false);

    if (!city) return;

    const res = await fetchCityByName(city);

    console.log(res);

    !autocompleteCities.includes(e.target.value) &&
      res &&
      setAutocompleteCities(res.map(place => place.name));
    setFlag(res.map(place => place.country_code.toLowerCase()));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr('');
  };

  const hideSuggs = value => {
    // onSelected(value);
    setIsHideSuggs(true);
  };

  return (
    <form>
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
            pattern={autocompleteCities.join('|')}
            autoComplete="off"
          />
          <DataList style={{ display: isHideSuggs ? 'none' : 'block' }}>
            {autocompleteCities.map((item, idx) => (
              <Option
                key={'' + item + idx}
                onClick={() => {
                  hideSuggs(item);
                }}
              >
                <img
                  src={`https://hatscripts.github.io/circle-flags/flags/${flag[idx]}.svg`}
                  width="30"
                  alt="flag"
                />

                <CityName>{item}</CityName>
              </Option>
            ))}
          </DataList>
          <PlacesAutocompleteHint>
            *start typing and choose your city from the given options
          </PlacesAutocompleteHint>
          <button type="submit">Submit</button>
        </InputWrap>
      </PlacesAutocomplete>
    </form>
  );
};
