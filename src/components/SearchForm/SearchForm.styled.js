import styled from 'styled-components';

export const PlacesAutocomplete = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const InputWrap = styled.div`
  padding: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const InputError = styled.span`
  background: #ff00002e;
  border-radius: 20px;
  display: inline-block;
  font-size: 14px;
  margin-left: 4px;
  padding: 8px;
`;

export const Input = styled.input`
  border: 1px solid #222;
  border-radius: 0;
  box-sizing: border-box;
  display: block;
  height: 42px;
  padding: 8px;
  width: 300px;
`;

export const DataList = styled.ul`
  max-height: 20vh;
  overflow-y: scroll;
  background-color: white;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
`;

export const PlacesAutocompleteHint = styled.span`
  display: inline-block;
  font-size: 12px;
  margin-top: 4px;
`;

export const CityName = styled.span``;
