import React from 'react';

function About() {
  return (
    <div className='bookandbuy'>
      <h1>BOOK AND BUY</h1>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Sign in</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form action="/action_page.php">
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label for="pwd">Phone Number:</label>
    <input type="phone number" className="form-control" id="number"/>
  </div>
  <div className="form-group">
    <label for="pwd">Username:</label>
    <input type="text" className="form-control" id="text"/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
  <button type="submit" className="btn btn-default">Sign in</button>
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

export default About;
