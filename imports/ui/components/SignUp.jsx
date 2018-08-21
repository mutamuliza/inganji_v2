import React from 'react';

export default class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      haveAccount:true,
    }
  }

  createUser(e){
      e.preventDefault();
      var email= this.refs.email.value.trim();
      var password=this.refs.password.value.trim();
      var confemail=this.refs.confemail.value.trim();
      var username=this.refs.username.value.trim();

    if(email){
        if(password){
            if(username){
    if(email===confemail){
      Accounts.createUser({
          email:email,
          password:password
      });}
      else{
          alert('Email does not match')
      }
    }else{
        alert('Input username')
    }
    }else{
        alert('Input password');
    }
    }
    else{
        alert("Input Email");
    }
  }

  haveAccount(e){
    e.preventDefault();
    this.setState({
      haveAccount:!this.state.haveAccount,
    })

  }
  logIn(e){
    e.preventDefault();
    var email= this.refs.email.value.trim();
    var password=this.refs.password.value.trim();
    
  }
    render(){
        return(
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{ this.state.haveAccount ? "Sign in" : "Create an Account"}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
    {this.state.haveAccount ? <form onSubmit={this.createUser.bind(this)}>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="email" className="form-control" id="email" ref='email'/>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" ref='password'/>
    </div>
    <button type="submit" className="btn btn-default">Sign in</button>
  </form>:<form onSubmit={this.createUser.bind(this)}>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="email" className="form-control" id="email" ref='email'/>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">confirm email:</label>
      <input type="email" className="form-control" id="confemail" ref='confemail'/>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Username:</label>
      <input type="text" className="form-control" id="text" ref='username'/>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" ref='password'/>
    </div>
    <button type="submit" className="btn btn-default">Sign Up</button>
  </form>}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-secondary" onClick={this.haveAccount.bind(this)}>{this.state.haveAccount? "Create an Account":"Sign in"}</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

//function