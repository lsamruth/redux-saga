import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData } from "./actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-intro">Customers list fetched by saga</h1>
        <ul style={{ listStyle: "none" }}>
          {this.props.customers.map(i => {
            return <li>Name :{i.Name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers.customers
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
