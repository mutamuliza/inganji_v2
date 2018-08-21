import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Seats extends React.Component {
  render() {
    return (
    		<div>
    			<div className="container-fluid">
    				<div className="row">
    					<div className="col-md-8"></div>
    					<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
    						<div className="container-fluid">
    							<div className="row" style={{paddingTop:'50px'}}>
                                    <div className="col-md-12"><img src={'tugende.png'} style={{height:'30px',marginBottom:'42px'}}/></div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>From:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>RULINDO</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>To:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>KIGALI</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Date:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>02-08-2018</div>
                                    <div className="col-md-12 mb-4"></div>
                                    <div className="col-md-6" style={{backgroundColor:'#07224e',color:'#3b97ff',padding:'10px 0px'}}>VOLCANO</div>
                                    <div className="col-md-6" style={{backgroundColor:'#07224e',color:'#3b97ff',padding:'10px 0px'}}>1030 rwf</div>
    								<div className="col-md-12" style={{padding:'0px'}}>
    									<table className="table table-bordered">
    										<thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
    											<th style={{borderColor:'#001737'}}>LEAVE HOUR</th>
    											<th style={{borderColor:'#001737'}}>BUS STATUS</th>
    										</thead>
    										<tbody style={{background:'#072c6a',color:'#3b97ff'}}>
    											<tr>
    												<td style={{borderColor:'#001737'}}>05:15 AM</td>
    												<td style={{borderColor:'#001737'}}>Left</td>
    											</tr>
    											<tr>
    												<td style={{borderColor:'#001737'}}>05:30 AM</td>
    												<td style={{borderColor:'#001737'}}>Left</td>
    											</tr>
    											<tr>
    												<td style={{borderColor:'#001737'}}>06:30 AM</td>
    												<td style={{borderColor:'#001737'}}>4 Seats</td>
    											</tr>
    											<tr style={{backgroundColor:'#bb0033',color:'#ffffff'}}>
    												<td style={{borderColor:'#001737'}}>07:00 AM</td>
    												<td style={{borderColor:'#001737'}}>Full</td>
    											</tr>
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    					</div>
    					<div className="col-md-1"></div>
    				</div>
    			</div>
    		</div>

    	);
	}
}
