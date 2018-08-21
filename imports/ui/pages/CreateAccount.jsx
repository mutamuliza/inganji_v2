import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Create extends React.Component {
  render() {
    return (
    		<div>
    			<div className="container-fluid">
    				<div className="row">
    					<div className="col-md-8"></div>
    					<div className="col-md-3 text-center" style={{background:'#001737',color:'#0177fe'}}>
    						<h2 className="text-center padigo">CREATE ACCOUNT</h2>
    						<form>
    							<div className="input-group mb-3">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-envelope"></i>
								    </div>
								  </div>
								  <input type="email" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
								</div>
    							<div className="input-group mb-3">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-phone"></i>
								    </div>
								  </div>
								  <input type="text" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
								</div>
							  <div className="input-group mb-3">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-user"></i>
								    </div>
								  </div>
								  <input type="text" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
								</div>

								<div className="input-group">
								  <div className="input-group-prepend">
								  	<div className="input-group-text rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}}>
								    	<i className="fa fa-key"></i>
								    </div>
								  </div>
								  <input type="password" className="form-control rounded-0" style={{background:'#001737',color:'#0177fe',borderStyle:'none',borderBottom:'1px solid #0177fe'}} required/>
								</div>
								<button type="submit" className="btn padibt" style={{background:'#092d6a',color:'#0177fe',width:'204px',height:'26px',padding:'0px',borderRadius:'20px'}}>Create</button>
							</form>
    					</div>
    					<div className="col-md-1"></div>
    				</div>
    			</div>
    		</div>
    	);
}
}