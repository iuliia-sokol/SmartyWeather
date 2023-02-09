import { ButtonMain, ButtonText } from './Button.styled';

export const ButtonUI = ({ text, type, onClick }) => {
  return (
    <ButtonMain type={type} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonMain>
  );
};
