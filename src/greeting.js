import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function Greeting(props) {
  console.log('Greeting called' + props.isLoggedIn);
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn==='true') {
    console.log('dhiresh bawli gand aa gya');
    return <UserGreeting name={props.name}/>;
  }
  return <GuestGreeting />;
}

export function UserGreeting(props) {
  console.log('UserGreeting called');
  return(
  <div>
  <h1>Welcome back! {props.name}</h1>
  </div>);

}
export function GuestGreeting() {
  return <h1>Please Login.</h1>;
}
