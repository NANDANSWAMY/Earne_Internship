import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//component
import CreateRecord from './components/createRecord';
import Landing from './components/landing'
import Records from './components/allRecord'
import confirmPage from './components/confirmation'

//Redux
import { Provider } from 'react-redux'
import store from './store'


import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Fragment>
            <Route exact path='/' component={Landing} />
            <Switch>
              <Route exact path='/register' component={CreateRecord} />
              <Route exact path='/records' component={Records} />
              <Route exact path='/confirm' component={confirmPage} />

            </Switch>

          </Fragment>
        </div>

      </Router>
    </Provider>
  )
}

export default App