import './assets/styles/index.scss';

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App.jsx';
import Loading from './components/common/Loading.jsx';

/*axios拦截器 start*/
import setupAxiosInterceptors from './config/axios';
import {logout} from './redux/actions/authentication';

setupAxiosInterceptors(() => store.dispatch(logout()));
/*axios拦截器 end*/

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading/>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
