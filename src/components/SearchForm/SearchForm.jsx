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

export const SearchForm = ({
  elementRef,
  hideSuggs,
  isHideSuggs,
  setIsHideSuggs,
}) => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');
  const [selection, setSelection] = useState(false);

  //   console.log(city);

  useEffect(() => {
    if (!city) {
      hideSuggs();
    }
  }, [city, hideSuggs]);

  const handleSubmit = event => {
    event.preventDefault();
    if (selection) {
      //    dispatch(addContact({ name, number }));
    }

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
            return {
              city: place.name,
              region: place.admin1,
              country: place.country_code.toLowerCase(),
            };
          }
          return {
            city: place.name,
            region: '',
            country: place.country_code.toLowerCase(),
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
    setSelection(false);
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
                  setSelection(true);
                }}
              >
                <img
                  src={`https://hatscripts.github.io/circle-flags/flags/${item.country}.svg`}
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
