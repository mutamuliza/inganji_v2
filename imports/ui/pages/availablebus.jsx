import React from 'react';

function availablebus() {
  return (
    <div className='availablebus' style={{color:"#3b97ff"}}>
      <h1></h1>
      
<div className="container">
              
  <table className="table table-bordered">
    <thead>
      <tr style={{ backgroundColor: "#001737",color:"#3b97ff"}}>
        <th>DESTINATION</th>
        <th>AGENCY</th>
        <th>FARE</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MUHANGA</td>
        <td>VOLCANO</td>
        <td>1030</td>
       
      </tr>
      <tr>
        <td>MUHANGA</td>
        <td>HORIZON</td>
        <td>1030</td>
        
      </tr>
      <tr>
        <td>MUHANGA</td>
        <td>KIVU BELT</td>
        <td>1030</td>
        
      </tr>
      <tr>
      <td>MUHANGA</td>
        <td>stella</td>
        <td>1030</td>
        
        </tr>
    </tbody>
  </table>
</div>








    </div>
  );
}

export default availablebus;