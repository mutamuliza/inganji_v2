import React from 'react';

function pay() {
  return (
    <div className='pay'>
      


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8" ></div>
          <div className="col-md-3" style={{width: "361px",height:"625px",backgroundColor:" #061532"}}>
          <img src="tugende.png" className="tugende" alt="tugende" style={{width:"90px", height:"30px",marginTop:"30px" ,marginLeft:"35px"}}/>
          <div className="table"style={{width:"308px",height:"400px",background:"#ffffff",opacity: "0.65"}}>
          <label style={{color:"#0b2c5e" ,fontSize:"15px" ,paddingBottom:"10px",marginLeft:"35px",paddingTop:"15px"}}>NAME:</label>
         
          <br/>
          <label style={{color:"#0b2c5e" ,fontSize:"15px",paddingBottom:"10px",marginLeft:"35px"}}>DEPARTURE-DESTINATION</label>
          <br/>
          <label style={{color:"#0b2c5e" ,fontSize:"15px",paddingBottom:"10px",marginLeft:"35px"}}>AGENCY:</label>
          <br/>
          <label style={{color:"#0b2c5e" ,fontSize:"15px",paddingBottom:"10px",marginLeft:"35px"}}>DATE:</label><br/>
          <label style={{color:"#0b2c5e" ,fontSize:"15px",paddingBottom:"10px",marginLeft:"35px"}}>At:</label><br/>
          <label style={{color:"#0b2c5e" ,fontSize:"15px",paddingBottom:"20px",marginLeft:"35px"}}>TICKET no:</label><br/>
          <label style={{color:"#0b2c5e" ,fontSize:"20px",paddingBottom:"10px",marginLeft:"35px"}}>YOU HAVE PURCHASED A SINGLE RIDE TICKET</label>

          <h5 style={{textAlign:"center"}}>Enjoy the ride with us, Tugende! </h5>
          
          </div>
          <a href="" type="button" class="btn btn-primary" style={{textAlign:"center",margintop:"40px",width: "100px",height: "30px",boxshadow:"0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundColor: " #061532",color: "#0177fe", marginleft:"20px",fontFamily: "Exo",fontSize: "14px",fontWeight:"500",marginLeft:"10px"}}>Change Time</a>
          <a href="" type="button" class="primary" style={{textAlign:"center",margintop:"40px",width: "100px",height: "30px",boxshadow:"0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundColor: " #061532",color: "#0177fe", marginLeft:"35px",fontFamily: "Exo",fontSize: "14px",fontWeight:"500"}}>Cancel</a>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>


    </div>
  );
}

export default pay;
