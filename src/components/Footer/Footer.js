import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem >(31) 99212-9446</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem >guilhermeb.regis@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <CompanyContainer>
          <Slogan>Innovating one project a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="http://github.com" target="_blank">
          <AiFillGithub size="3rem"/>
          </SocialIcons>
        <SocialIcons href="http://linkedin.com" target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
