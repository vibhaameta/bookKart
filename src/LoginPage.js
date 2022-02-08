import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {  
  constructor(props) {  
      super(props);  
      this.state = {email: '', password:''};   
      this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  
  handleSubmit() {
      //storing the value in session storage
      sessionStorage.setItem('email', this.state.email);
      sessionStorage.setItem('password', this.state.password);
  }  
  render() { 
      return (  
          <form>   
            <label>  
                Email:  
                <input type="email" value={this.state.email} onChange={(event)=>{
                    this.setState({email:event.target.value})
                }} />  
            </label>  
            <label>  
                Password:  
                <input type="password" value={this.state.password} onChange={(event)=>{
                    this.setState({password:event.target.value})
                }} />  
            </label>
            <button disabled={this.state.password.length<8} onClick={()=>this.handleSubmit()}>
                {this.state.password.length>=8?<Link to='/home'>Submit</Link>:'submit'}
                </button>
         </form>
         
      );  
  }  
} 
export default Login;