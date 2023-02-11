import { WrapperBox } from 'components/BoxWrapper/Wrapper';
import { IndicatorUI } from 'components/Indicator/Indicator';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAirData } from 'redux/location/locSelectors';
import { CurrentState, IndicatorsWrapper } from './AirBox.styled';

import co from '../../images/air/co-min.png';
import no2 from '../../images/air/no2-min.png';
import o3 from '../../images/air/o3-min.png';
import so2 from '../../images/air/so2-min.png';
import pm25 from '../../images/air/pm25-min.png';
import pm10 from '../../images/air/pm10-min.png';

const formatIndex = index => {
  switch (index) {
    case 1:
      return 'Good';
    case 2:
      return 'Moderate';
    case 3:
      return 'Unhealthy for sensitive group';
    case 4:
      return 'Unhealthy';
    case 5:
      return 'Very Unhealthy';
    case 6:
      return 'Hazardous';
    default:
      return;
  }
};

const AirUI = () => {
  const air = useSelector(getAirData);
  const index = formatIndex(air['us-epa-index']);
  return (
    <WrapperBox>
      <CurrentState>{index}</CurrentState>
      <IndicatorsWrapper>
        <IndicatorUI
          src={co}
          text="Carbon monoxide"
          source={`${air.co.toFixed(2)} μg/m3`}
        />
        <IndicatorUI
          src={no2}
          text="Nitrogen dioxide"
          source={`${air.no2.toFixed(2)} μg/m3`}
        />
        <IndicatorUI
          src={o3}
          text="Ozone"
          source={`${air.o3.toFixed(2)} μg/m3`}
        />
        <IndicatorUI
          src={so2}
          text="Sulphur dioxide"
          source={`${air.so2.toFixed(2)} μg/m3`}
        />
        <IndicatorUI
          src={pm25}
          text="PM2.5"
          source={`${air.pm2_5.toFixed(2)} μg/m3`}
        />
        <IndicatorUI
          src={pm10}
          text="PM10"
          source={`${air.pm10.toFixed(2)} μg/m3`}
        />
      </IndicatorsWrapper>
    </WrapperBox>
  );
};

export default React.memo(AirUI);
