import React from 'react';
import SignUp from './SignUp.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
export default class Header2 extends React.Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light backnav2">
          <a className="navbar-brand" href="#" style={{color:'#3b97ff',}}>DOWNLOAD <i className="fa fa-download"></i></a>
          <button className="navbar-toggler" type="button" style={{color:'#3b97ff',}} data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{color:'#3b97ff',}}>BUY TICKET<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
              <a className="nav-link"  style={{color:'#3b97ff',}}>  <AccountsUIWrapper /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'#3b97ff',}} data-toggle="modal" data-target="#exampleModal"><i className="fa fa-user-circle"></i> Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src="united-kingdom.png"alt="Responsive image"style={{width:"20px",height:"20px",backgroundColor: "#012240"}}/>Eng</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src="rwanda.png"alt="Responsive image"style={{width: "20px",height:"20px",backgroundColor: "#012240"}}/>Kiny</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'#3b97ff',}}><img src="france.png"alt="Responsive image"style={{width: "20px",height:"20px",backgroundColor: "#012240"}}/>Fren</a>
              </li>
           
            </ul>
          </div>
        </nav>
       <SignUp />
      </div>
    );
  }
}
