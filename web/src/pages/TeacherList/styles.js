import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media(min-width: 700px) {
    max-width: 100vw;
  }
`;

export const FormSearchTeacher = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  button:hover {
    background: var(--color-secundary-dark);
  }

  @media(min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;