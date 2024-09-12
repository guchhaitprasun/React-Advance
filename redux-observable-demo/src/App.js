import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserComponent from './components/UserComponent';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux Observable Demo</h1>
      <UserComponent />
    </div>
  </Provider>
);

export default App;
