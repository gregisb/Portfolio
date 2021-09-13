import React from 'react';
import Link from 'next/link';


import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, CardContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { AiFillGithub } from 'react-icons/ai';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projetos</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <CardContainer>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent><br />Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target='_blank'>GitHub</ExternalLinks>
              <ExternalLinks href={source} target='_blank'>Demo</ExternalLinks>
            </UtilityList>
          </CardContainer>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionText>
      <br />
      Mais projetos desenvolvidos por mim disponíveis na minha página no <a href='https://github.com/gregisb' target="_blank" style={{ color: "white" }}><AiFillGithub /> GitHub</a>.
    </SectionText>
  </Section>
);

export default Projects;