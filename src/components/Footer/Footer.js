import React from 'react';
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionTitle } from '../../styles/GlobalComponents';


const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Entre em contato</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefone</LinkTitle>
          <LinkItem ><AiOutlineWhatsApp /><br/> (31) 99212-9446</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem ><AiOutlineMail /> guilhermeb.regis@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <CompanyContainer>
          <Slogan>Guilherme Regis - Desenvolvedor Web</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/gregisb" target="_blank">
          <AiFillGithub size="3rem"/>
          </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/guilherme-regis/" target="_blank">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
