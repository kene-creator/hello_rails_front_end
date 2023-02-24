import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
