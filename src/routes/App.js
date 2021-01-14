import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Counters from '../templates/Counters/Counters';
import Welcome from '../templates/Welcome/Welcome';

const App = ({ loading }) => {
  const loadingComponent = <Loading />
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/counters" component={Counters} />
        </Switch>
      </Router>
      {loading === true ? loadingComponent : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}
export default connect(mapStateToProps)(App);