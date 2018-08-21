import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Login extends React.Component {
  render() {
    return (
    		<div>
    			<div className="container-fluid">
    				<div className="row">
    					<div className="col-md-8"></div>
    					<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
    						<h2 className="text-center padigo">LOG IN</h2>
    						<form>
							  <div className="input-group mb-3">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-user"></i>
								    </div>
								  </div>
								  <input type="text" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
								</div>

								<div className="input-group">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-key"></i>
								    </div>
								  </div>
								  <input type="password" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}/>
								</div>
								<button className="btn padibt" style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'26px',padding:'0px',borderRadius:'20px'}}> Log In</button>
							</form>
							<a className="btn padibtn" href='/create' style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'26px',padding:'0px',borderRadius:'20px'}}>Create account</a>
    					</div>
    					<div className="col-md-1"></div>
    				</div>
    			</div>
    		</div>
    	);
	}
}