import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../store/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RouterApp from '../router/RouterApp';
import { ThemeProvider } from '@material-ui/core/styles';
import { CustomTheme } from '../styles/theme';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme}>
        <RouterApp />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
