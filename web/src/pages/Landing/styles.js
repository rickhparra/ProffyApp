import styled from 'styled-components';

export const Container = styled.div`  
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const Content = styled.div`  
  width: 90vw;
  max-width: 700px;

  .hero-image {
    width: 100%;
  }

  @media(min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
      'logo hero hero'
      'buttons buttons total'
    ;

    .hero-image {
      grid-area: hero;
      justify-self: end;
      height: 100%;
    }
  }
`;

export const LogoContainer = styled.div`  
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media(min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`  
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a:first-child {
    margin-right: 1.6rem;
  }

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;    
    font-weight: 700 2.0rem Archive;
    
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    background: var(--color-primary-lighter);

    transition: background-color 0.2s;
  }

  a img {
    width: 4rem;
  }

  .study {
    background: var(--color-primary-lighter);
  }

  .giveClasses {
    background: var(--color-secundary);
  }

  .study:hover {
    background: var(--color-primary-light);
  }

  .giveClasses:hover {
    background: var(--color-secundary-dark);
  }

  @media(min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }

    a img {
      margin-right: 2.4rem;
    }
  }
`;

export const Connections = styled.span`  
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;    
  }

  @media(min-width: 1100px) {
    grid-area: total;
  }
`;