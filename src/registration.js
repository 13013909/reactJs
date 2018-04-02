import React from 'react';
export default class Register extends React.Component {
  constructor(props) {
    super();
    this.handleRegister=this.handleRegister.bind(this);
    this.email = '';
  }
  handleRegister(event){
    event.preventDefault();
  }
  componentWillMount(){
    this.email='mayank';
  }
  render(){
  return(
  <div>
  {this.email}
  <form onSubmit={this.handleRegister}>
  enter name  <input type="text" name="email" /><br/>
  enter password<input type="password" name="password" />
  <input type="submit" value="submit"/>
  </form>
  </div>) ;
}
}
