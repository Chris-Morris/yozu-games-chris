import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

// Import Navigators
import NavContainer from './navigators/NavigationContainer';

const App = () => {
  return (
    <Provider store={ store }>
      <NavContainer />
    </Provider>
  );
}

export default App;