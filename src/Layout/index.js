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
`;

const Content = styled.div`
  width: 100%;
  overflow: hidden;
`;
