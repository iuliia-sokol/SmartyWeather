import { WrapperBox } from 'components/BoxWrapper/Wrapper';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAirData } from 'redux/location/locSelectors';
// import { AirWrapper } from './AirBox.styled';

const AirUI = () => {
  const air = useSelector(getAirData);
  console.log(air);
  return <WrapperBox></WrapperBox>;
};

export default React.memo(AirUI);
