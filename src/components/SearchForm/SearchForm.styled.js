import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 32px 16px;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 30px;
  gap: 16px;
  box-shadow: inset -5px -5px 9px rgba(255, 255, 255, 0.45),
    inset 5px 5px 9px rgba(94, 104, 121, 0.3);
  backdrop-filter: blur(5.3px);
  -webkit-backdrop-filter: blur(5.3px);
  border: 1px solid rgba(255, 255, 255, 0.77);
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  font-size: 20px;
  line-height: ${p => p.theme.lineHeights.main};
`;

export const PlacesAutocomplete = styled.div`
  align-items: center;
  display: flex;
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
  border-radius: 16px;
  border: none;
  box-sizing: border-box;
  display: block;
  height: 42px;
  padding: 12px 16px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.63);
`;

export const DataList = styled.ul`
  border-radius: 16px;
  max-height: 20vh;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.63);
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
`;

export const PlacesAutocompleteHint = styled.span`
  display: inline-block;
  font-size: 12px;
  margin-top: 4px;
`;

export const CityName = styled.span``;
