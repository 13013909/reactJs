
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Greeting} from './greeting.js';
import {UserGreeting} from './greeting.js';
import {GuestGreeting} from './greeting.js';
import Register from './registration.js';




class Login extends React.Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: 'golu',
      loggedIn: ''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }

  handleLogout(){
    this.setState({loggedIn:'false'});
  }

  handleSubmit(event)
  {
    if(event.target.email.value === this.state.email && event.target.password.value === this.state.password){
        this.setState({loggedIn:'true'})
        console.log(this.state.loggedIn);
    }else {
      alert('Please Check Email & Password');
      this.setState({loggedIn:'false'});
      event.target.email.value = '';
      event.target.password.value = '';
    }
    event.preventDefault();
  }

  componentDidUpdate(){
    <Greeting isLoggedIn={this.state.loggedIn} name={this.state.email}/>
  }
  render () {
    const isLoggedIn=this.state.loggedIn;
    if(this.state.loggedIn==='true'){
      return (

        <div>
      <Greeting  isLoggedIn={this.state.loggedIn} name={this.state.email}/>
      <button onClick={this.handleLogout}>Logout.</button>
      </div>
      );
    }else if(this.state.email==''){
      return <Register />
    }else {
    return (
      <div>
    <Greeting isLoggedIn={this.state.loggedIn}/>
      <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text" name="email"/>
          <label>Password</label>
          <input type="password" name="password" />
          <input type="submit" value="submit"/>
        </form>
        </div>
    );
    }
  }


}
ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
