import { RunningText, TextContainer } from './TextLine.styled';

export const TextLine = ({ text }) => {
  return (
    <TextContainer>
      <RunningText>{text}</RunningText>
    </TextContainer>
  );
};
