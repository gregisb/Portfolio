import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        my personal portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text. Lorem ipsum, or lipsum as it is sometimes known, is dummy text.
      </SectionText>
      <Button onClick={() => window.location='http://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;