import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Phone Number:</label>
    <input type="phone number" class="form-control" id="number"/>
  </div>
  <div class="form-group">
    <label for="pwd">Username:</label>
    <input type="text" class="form-control" id="text"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
  <button type="submit" class="btn btn-default">Sign in</button>
</form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
