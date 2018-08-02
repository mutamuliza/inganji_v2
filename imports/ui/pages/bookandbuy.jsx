import React from 'react';

function BookandBuy() {
  return (
    <div className='bookandbuy'>
      <h1>tugende</h1>

      <table>
          <tbody>
              
<form action="/action_page.php">
  <div className="form-group justify-content-center">
  <tr> <td><label for="email">FROM:</label>
    <input type="email"className="form-control" id="email"/>
     </td> </tr>
  </div>
  
  <div className="form-group"style={{width:"100px", height:"50px" ,color:"#0a347a",}}>
  <tr> <td> <label for="email">TO:</label>
    <input type="text"className="form-control" id="email"/>
  </td> </tr>
  </div>
  <div className="form-group"style={{width:"100px", height:"50px" ,color:"#0a347a",}}>
  <tr> <td> <label for="email">DATE:</label>
    <input type="date"className="form-control" id="email"/>
    </td> </tr>
  </div>

  <div className="form-group"style={{width:"100px", height:"50px" ,color:"#0a347a",}}>
  <tr> <td> <label for="email">BUS OPERATOR:</label>
    <input type="text"className="form-control" id="email"/>
    </td> </tr>
  </div>


 <div className="form-group"style={{width:"100px", height:"50px" ,color:"#0a347a"}}>
 <tr> <td> <label for="email">HOUR:</label>
    <input type="email"className="form-control" id="email"/>
    </td> </tr>
  </div>

   <div className="form-group"style={{width:"100px", height:"50px" ,color:"#0a347a",}}>
   <tr> <td><label for="email">NUMBER OF SEATS:</label>
    <input type="number"className="form-control" id="email"/>
    </td> </tr>
  </div>
  <button type="submit"className="btn btn-default">Submit</button>
</form>
</tbody>
</table>

        </div>

  );
}

export default BookandBuy;
