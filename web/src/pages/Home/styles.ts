import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding-bottom: 64px;

  width: 100%;

  background-color: #f2f2f2;

  h1 {
    margin: 80px;
  }
`;
