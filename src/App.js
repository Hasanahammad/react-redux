import React from "react";
import "./App.css";
import { connect } from "react-redux";
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUsers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './User'

function App(props) {
  return (
    <Router>
      <Switch>
      <Route exact path={"/"}>
      <div className="App">
        <h3>REDUX MOVIELIST APP</h3>
        <br />
        <span style={{ color: "green" }}>YOUR CURRENT MOVIE IS: </span>
        {props.movies.name}
        <br />
        <p>
          <button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
        </p>
        <br />
        
        {props.users.length === 0 ? (
          <p>THERE ARE NO USERS</p>
        ) : (
          props.users.map((user, idx) => (
            <p key={idx}>
              <Link to={`/${user.id}`}>{user.username}</Link> -{" "}
              {user.description}
            </p>
          ))
        )}
        <br />
        <button onClick={props.fetchUsers}>FETCH USERS</button>
      </div>
      </Route>
        <Route path={`/:userId`}>
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);
