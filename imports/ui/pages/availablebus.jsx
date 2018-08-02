import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {BusOperators} from '../../api/tasks.js';

class availablebus extends React.Component {
  renderBus(){
            console.log(this.props.Bus.length);
            return this.props.Bus.map((mucyo)=>(
                    <tr>
            <td> {mucyo.to}</td>
              <td> {mucyo.company}</td>
               <td> {mucyo.price}</td>
            </tr>
            
                    ));
        }

  render(){
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
        {this.renderBus()}
    </tbody>
  </table>
</div>








    </div>
  );
}
}

export default withTracker(() => {
        return {
     Bus: BusOperators.find({}).fetch(),
    };
})(availablebus);