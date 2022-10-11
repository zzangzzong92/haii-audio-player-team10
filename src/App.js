import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import Layout from 'Layout';
import Router from 'Router';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
