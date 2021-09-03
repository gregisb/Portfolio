import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GiPalmTree } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Span2 } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "16px" }}>
          <GiPalmTree size="4rem" style={{paddingRight: "1rem"}}/><Span>Guilherme Regis</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/gregisb" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/guilherme-regis/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
