import React from 'react';

function BookandBuy() {
  return (
    <div>
   
     
      

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8" ></div>
          <div className="col-md-3 text-center"style={{width: "361px",height:"625px",backgroundColor: "#001b33"}}>
          <img src="tugende.png" className="jane" alt="tugende" style={{width:"90px", height:"30px",marginTop:"30px"}}/>
          <h1 style={{width: "208px",height:"52px",color: "#0177fe",fontFamily: "Exo",fontSize: "23px",fontWeight:"500",textTransform: "uppercase", paddingTop:"50px",marginBottom:"80px"}}> Pay Your Ticket</h1>
         
           <label style ={{color:"#0177fe",fontFamily: "Exo",fontSize:" 18px",fontWeight: "500",width:"290px",height: "39px",boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundcolor: "#040f28",marginBottom:"10px"}}>Ticket Fare</label>
           <input type="numbers" placeholder="Account number" className="form-control" style ={{width: "290px",height: "39px",boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundColor: "#092d6a",borderColor:"#092d6a",color:" #0177fe",fontFamily: "Exo",fontsize: "18px",fontweight: "500",marginBottom:"10px"}}/>
           <i className="fafa-key"><input type="numbers" placeholder="PIN" className="form-control" style ={{width: "290px",height: "39px",boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundColor: "#092d6a",color:" #0177fe",fontFamily: "Exo",fontsize: "18px",fontweight: "500",marginBottom:"10px",borderColor:"#092d6a"}}/></i>
           <a href="/pay" type="button" class="btn btn-primary" style={{width: "100px",height: "39px",boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",borderRadius: "25px",backgroundColor: "#001129",borderColor:"#092d6a",color:" #0177fe",fontFamily: "Exo",fontsize: "18px",fontweight: "500",marginBottom:"10px"}}>PAY</a>
         

          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
       
      </div>

  );
}

export default BookandBuy;
