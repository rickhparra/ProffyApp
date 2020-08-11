import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';

import {  
  Header,
  TopBarContainer,
  HeaderContent
} from './styles';

interface IPageHeaderProps {
  title?: string;
  description?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return(
    <Header>
      <TopBarContainer>
        <Link
          to='/'
        >
          <img 
            src={backicon}
            alt='Voltar'
          />            
        </Link>
        <img 
          src={logoImg}
          alt='Logo'
        />
      </TopBarContainer>

      <HeaderContent>
        <strong>{ props.title }</strong>
        { props.description && <p>{ props.description }</p> }

        { props.children }
      </HeaderContent>
    </Header>
  );
}

export default PageHeader;