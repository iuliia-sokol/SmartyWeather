import { LoaderOverlay, LoaderWrapper, PicWrapper } from './Loader.styled';

import moon from '../../images/conditions/night-moon-min.png';
import sun from '../../images/conditions/day-sun-min.png';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderWrapper>
        <PicWrapper>
          <img src={sun} alt="sun" loading="lazy" />
          <img src={moon} alt="moon" loading="lazy" />
        </PicWrapper>
      </LoaderWrapper>
    </LoaderOverlay>
  );
};
