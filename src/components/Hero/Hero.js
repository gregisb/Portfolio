import React from 'react';
import { DiReact, DiSass } from 'react-icons/di';
import { SiJavascript, SiCss3 } from 'react-icons/si';
import { FaNode, FaHtml5 } from 'react-icons/fa';
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
        Desenvolvedor Web <br/><br/>
        Desenvolvimento de sistemas e aplicações web, websites e landing pages. <br/>
        <FaHtml5 size='5rem' color='white'/> <SiCss3 size='5rem' color='white'/> <SiJavascript size='5rem' color='white'/> <DiReact size='5rem' color='white'/> <DiSass size='5rem' color='white' /> <FaNode size='5rem' color='white'/>
      </SectionText>
      <Button onClick={() => scroll()}>Saiba mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;