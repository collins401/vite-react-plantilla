import { useState, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Nprogress from './components/Loading/Nprogress';
import PageRoutes from './routes';
import { store } from './store';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Suspense fallback={<Nprogress />}>{PageRoutes()}</Suspense>
      </Provider>
    </HashRouter>
  );
}

export default App;
