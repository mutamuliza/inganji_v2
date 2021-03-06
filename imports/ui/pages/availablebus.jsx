import React from 'react';
import { NavLink } from 'react-router-dom';
export default class availablebus extends React.Component {
  render() {
    return (
    		<div>
    			<div className="container-fluid">
    				<div className="row">
    					<div className="col-md-8"></div>
    					<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
    						<div className="container-fluid">
    							<div className="row" style={{paddingTop:'50px'}}>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>From:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>RULINDO</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>To:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>KIGALI</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Date:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>02-08-2018</div>
    								<div className="col-md-3 text-right mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 3px 5px 0px'}}>Hour:</div>
    								<div className="col-md-9 text-left mb-1" style={{background:'#0d3dbe', color:'#3b97ff', padding:'5px 0px 5px 10px'}}>11:20</div>
    								<div className="col-md-12" style={{padding:'0px',marginTop:'20px'}}>
    									<table className="table table-bordered">
    										<thead style={{background:'#0d3dbe',color:'#3b97ff'}}>
    											<th style={{borderColor:'#001737'}}>DESTINATION</th>
    											<th style={{borderColor:'#001737'}}>AGENCY</th>
    											<th style={{borderColor:'#001737'}}>FARE</th>
    										</thead>
    										<tbody style={{background:'#072c6a',color:'#3b97ff'}}>
    											<tr>
    												<td style={{borderColor:'#001737'}}>Kigali</td>
    												<td style={{borderColor:'#001737'}}>Volcano</td>
    												<td style={{borderColor:'#001737'}}>1030</td>
    											</tr>
    											<tr>
    												<td style={{borderColor:'#001737'}}>Kigali</td>
    												<td style={{borderColor:'#001737'}}>Volcano</td>
    												<td style={{borderColor:'#001737'}}>1030</td>
    											</tr>
    											<tr>
    												<td style={{borderColor:'#001737'}}>Kigali</td>
    												<td style={{borderColor:'#001737'}}>Volcano</td>
    												<td style={{borderColor:'#001737'}}>1030</td>
    											</tr>
    											<tr>
    												<td style={{borderColor:'#001737'}}>Kigali</td>
    												<td style={{borderColor:'#001737'}}>Volcano</td>
    												<td style={{borderColor:'#001737'}}>1030</td>
    											</tr>
    										</tbody>
    									</table>
    								</div>
    							</div>
    						</div>
    						<a className="btn padibtn1" href='/' style={{background:' #061533',color:'#0177fe',width:'204px',height:'26px',padding:'0px',border:'1px solid #072860'}}>CHECK FOR OTHER BUSES</a>
    					</div>
    					<div className="col-md-1"></div>
    				</div>
    			</div>
    		</div>

    	);
	}
}
