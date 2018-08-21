import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {BusOperators} from '../../api/tasks.js';
import qs from 'query-string';
import SignUp from '../components/SignUp.jsx';

class availablebus extends React.Component {
  renderBus(){
            console.log(this.props.Bus.length);
            var from_ = qs.parse(this.props.location.search).from;
            var to_ = qs.parse(this.props.location.search).to;
            var date = qs.parse(this.props.location.search).date;
            var time = qs.parse(this.props.location.search).time;
            return this.props.Bus.map((mucyo)=>(
              (mucyo.to === to_ && mucyo.from === from_ && mucyo.date === date && mucyo.time===time) ?
                    <tr>
            <td> { Meteor.user()?<a className="btn btn-primary" href="/bookandbuy" role="button">{mucyo.to}</a>:<a className="btn btn-primary" href="#"  data-toggle="modal" data-target="#exampleModal"> {mucyo.to}</a> }</td>
              <td><a className="btn btn-primary" href="/bookandbuy" role="button">{mucyo.company}</a></td>
               <td> <a className="btn btn-primary" href="/bookandbuy" role="button">{mucyo.price}</a></td>
            </tr>: <nbsp/>
           
                    ));
          <SignUp />
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