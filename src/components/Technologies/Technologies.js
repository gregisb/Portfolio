import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <br/>
    <SectionTitle>Tecnologias<br/></SectionTitle>
    <SectionText>
      
      Trabalho com as principais tecnologias para desenvolvimento web através do ecossistema JavaScript.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiência com <br/>ReactJs, NextJs, JavaScript, CSS e HTML.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Conhecimento em <br/>NodeJs, Express e banco de dados como MySQL, PostgreSQL e MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>

     
    </List>
  </Section>
);

export default Technologies;
