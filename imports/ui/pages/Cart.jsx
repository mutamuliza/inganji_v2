import React from 'react';
import { NavLink } from 'react-router-dom';
export default class Cart extends React.Component {
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
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-location-arrow"></i>  From:</div>
    								<div className="col-md-6 text-left mb-3 bor">RULINDO</div>
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-map-marker"></i>  To:</div>
    								<div className="col-md-6 text-left mb-3 bor">KIGALI</div>
    								<div className="col-md-6 text-right mb-3 bol"><i className="fa fa-calendar"></i>  Date:</div>
    								<div className="col-md-6 text-left mb-3 bor">02-08-2018</div>
                                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-university"></i>  Bus Operator:</div>
                                    <div className="col-md-6 text-left mb-3 bor">VOLCANO</div>
                                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-clock-o"></i>  Hour:</div>
                                    <div className="col-md-6 text-left mb-3 bor">06:30 AM</div>
                                    <div className="col-md-6 text-right mb-3 bol"><i className="fa fa-calendar"></i>  Number of Seats:</div>
                                    <input type="number" className="col-md-6 text-left mb-3 bor"/>
                                    <a className="col-md-12 btn padibtn2" href='/'>Book</a>
                                    <a className="col-md-12 btn padibtn3" href='/'>Buy</a>
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
