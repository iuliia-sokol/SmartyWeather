import { ButtonMain, ButtonText } from './Button.styled';

export const ButtonUI = ({ text, type, onClick, selected, color }) => {
  return (
    <ButtonMain color={color} selected={selected} type={type} onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </ButtonMain>
  );
};
