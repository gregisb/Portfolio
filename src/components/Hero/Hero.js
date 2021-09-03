import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const scroll = () => {
  const section = document.querySelector( '#projects' );
  section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       Guilherme Regis        
      </SectionTitle>
      <SectionText>
        Desenvolvedor Full Stack <br/><br/>
        Desenvolvimento de sistemas e aplicações web, websites e landing pages.
      </SectionText>
      <Button onClick={() => scroll()}>Saiba mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;