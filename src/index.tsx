import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { store } from './store';
import { IndexPage } from './pages';
import { TodoPage } from './pages/todo';
import { Header } from './organisms/Header/Header';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/todos/:id">
            <TodoPage />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#root'));
