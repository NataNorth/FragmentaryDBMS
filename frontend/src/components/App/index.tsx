import React from 'react';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import './styles.module.scss';
import 'semantic-ui-css/semantic.min.css';
import MainPage from '../MainPage';
import { history } from '../../history';
import Header from '../Header';
import ReduxToastr from 'react-redux-toastr';

const App: React.FC = () => (
  <Provider store = {store}>
    <div>
    <Router history={history}>
        <Header/>
        <Route exact path="/" component={MainPage}/>
    </Router>
    <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position="bottom-right"
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick/>
    </div>
  </Provider>
);

export default App;
