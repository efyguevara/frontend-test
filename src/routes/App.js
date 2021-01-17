import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Counters from '../templates/Counters/Counters';
import Welcome from '../templates/Welcome/Welcome';
import Notifications from '../components/Notifications/Notifications';

const App = ({ loading, notifications }) => {
  const loadingComponent = <Loading />
  const notificationComponent = <Notifications />

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
      {notifications !== null ? notificationComponent : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    notifications: state.notifications
  }
}
export default connect(mapStateToProps)(App);