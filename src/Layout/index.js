import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
