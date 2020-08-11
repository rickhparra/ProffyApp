import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container, 
  Content, 
  LogoContainer,  
  ButtonsContainer,  
  Connections,  
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import contentImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const total = response.data.total;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img 
            src={logoImg} 
            alt='Logo' 
          />          
          <h2>Sua plataforma de estudos on-line</h2>
        </LogoContainer>

        <img 
          className='hero-image'
          src={contentImg} 
          alt='Plataforma de estudos' 
        />

        <ButtonsContainer>
          <Link 
            to='/study'
            className='study'
          >
            <img 
              src={studyIcon} 
              alt='Estudar' 
            />
            Estudar
          </Link>

          <Link 
            to='/give-classes'
            className='giveClasses'
          >
            <img 
              src={giveClassesIcon} 
              alt='Ensinar' 
            />
            Dar Aulas
          </Link>
        </ButtonsContainer>

        <Connections>
          Total de { totalConnections } conexões já realizadas
          <img
            src={purpleHeartIcon}
            alt='Coração Roxo'
          />
        </Connections>
      </Content>
    </Container>
  );
}

export default Landing;