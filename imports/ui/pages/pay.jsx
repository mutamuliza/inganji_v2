import React from 'react';

function pay() {
  return (
    <div className='pay'>
      <h1>PAY YOUR TICKET</h1>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">BOOK AND BUY</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form action="/action_page.php">
  <div className="form-group">
    <label for="ticket">Ticket fare:</label>
    <input type="number" className="form-control" id="number"/>
  </div>
  <div className="form-group">
    <label for="pwd">Account number:</label>
    <input type="text" className="form-control" id="text"/>
  </div>
  <div className="form-group">
    <label for="pwd">Pin:</label>
    <input type="numbers" className="form-control" id="number"/>
  </div>
  
  <button type="submit" className="btn btn-default" text-center>PAY</button>
 
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

export default pay;
