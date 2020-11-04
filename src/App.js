import React from 'react';
import './styles/index.css';
import Landing from './components/LandingComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <Landing />
      </div>
    </Provider>
  );
}

export default App;
