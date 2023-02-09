import { ButtonMain, ButtonText } from './Button.styled';

export const ButtonUI = ({ text, type, onClick, selected }) => {
  return (
    <ButtonMain selected={selected} type={type} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonMain>
  );
};
