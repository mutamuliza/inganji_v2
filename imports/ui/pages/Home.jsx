import React from 'react';
import classNames from 'classnames';
function Home() {
  return (
    <div>
      <div className="container-fluid">
      <div className="row justify-content-center rowp" style ={{background:'#001129',}}>
      <div className="col-md-7 justify-content-center padx">
      <h1 style={{color: "#3b97ff"}}> A short tutorial of how to use our app</h1>
       <video width="700" height="400" controls>
        <source src="final.mp4" type="video/mp4"/>
      </video>
      </div>
      <div className="col-md-12">
       <form className="form-inline justify-content-center padx">
          <div className="input-group mr-1">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01"  style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-location-arrow"></i> From:</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01"  style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}>
              <option selected>Choose...</option>
              <option value="1">RULINDO</option>
              <option value="2">BUGESERA</option>
              <option value="3">NYABIHU</option>
              <option value="1">RUBAVU</option>
              <option value="1">MUSANZE</option>
              <option value="1">KAYONZA</option>
              <option value="1">GATSIBO</option>
              <option value="1">NYAGATARE</option>
            </select>
          </div>
            <div className="input-group mr-1">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-map-marker"></i> To:</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}>
              <option selected>Choose...</option>
              <option value="1">KIGALI</option>
              <option value="2">MUHANGA</option>
              <option value="4">HUYE</option>
              <option value="5">KAMONYI</option>
              <option value="6">GISAGARA</option>
              <option value="7">NYAMAGABE</option>
              <option value="8">NYARUGURU</option>
            </select>
          </div>
          <div className="input-group mr-1">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-calendar"></i> Date</label>
            </div>
           <input type="date" className="form-control" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}/>
          </div>
          <div className="input-group mr-1">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01" style ={{background:'#06275e',color:'#0177fe',border:'#001129'}}><i className="fa fa-clock-o"></i> Hour</label>
            </div>
           <input type="time" className="form-control" style ={{background:'#0a347a',color:'#0177fe',border:'#001129'}}/>
          </div>
          <a className="btn" type="submit" href="/availablebus" style ={{background:'#1160ba',color:'#0f1d3b',border:'#001129'}}>Check bus</a>
       </form>
       </div>
       
       </div>
      



     
     </div>
     <div className="container-fluid servp">
      <div className="row">
        <div className="col-md-12 text-center" id="services" style ={{background:'#012240',color:'#2f7fd8'}}><h3>SERVICES</h3></div>
        <div className="col-md-12 text-center logp" style ={{color:'#2f7fd8'}}><img src={'tugende.png'} style={{width:'300px',}}/></div>
        <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>CHECK</h5>
          <p>By a simple tap, check the bus availability at more than one bus operators anywhere and at anytime.</p>
        </div>
        <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>COMPARE</h5>
          <p> At more than one bus operators scroll down, compare and choose on  your convinience and save money and time.</p>
        </div>
        <div className="col-md-4 text-center" style ={{color:'#3b97ff'}}><h5>BOOK</h5>
          <p> By logging into your created account, Tugende allows you to book and buy your ticket any place and anytime.</p>
        </div>
      </div>
     </div>
     <div className="container-fluid aboutp">
        <div className="row">
          <div className="col-md-12 text-center" id="about" style ={{background:'#012240',color:'#2f7fd8'}}><h3>ABOUT US</h3></div>
          <div className="col-md-12 padu"></div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5> DIVINE MARTINE UMUHIRE</h5>
           <p>Team's Hustler</p>
           <p>a student at Kepler University Program.</p>
           <p>Persuing Management in lofistics and operation.</p>
           <p>Interested in learning new things</p>
          </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>MUTAMULIZA JENNIFER</h5>
           <p>Team's Hustler</p>
           <p> a student at IPRC Kicukiro doing Information Technology.</p>
           <p> Interested in inspiring young women</p>
           </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>MUCYO KANYANKORE ARNAUD</h5>
            <p>Team's Hacker</p>
            <p> A student at CBE in business Information Technology.</p>
            <p>Interested in Traditional dance.</p>
          </div>
          <div className="col-md-3 text-center" style ={{color:'#3b97ff'}}><h5>PATRICK KUBWIMANA</h5>
            <p>Team's Hipster</p>
            <p>A student in CST in architecture</p>
            <p>Passionate about modern techonology</p>
            <p>and high tech designs with an experience on smart cities.</p>
          </div>
        </div>
     </div>
     <div className="container-fluid aboutp">
      <div className="row justify-content-md-center">
          <div className="col-md-12 text-center" id="contact" style ={{background:'#012240',color:'#2f7fd8'}}><h3>CONTACT</h3></div>
          <div className="col-md-12 padi"></div>
          <div className="col-md-12 text-center" style ={{color:'#2f7fd8'}}><p>For more information reach out here</p></div>
          <div className="col-md-12 text-center" style ={{color:'#2f7fd8'}}><p>We value your opinion than anything else</p></div>
          <div className="col-md-7" style ={{color:'#2f7fd8'}}>
             <textarea className="form-control" aria-label="With textarea" style ={{background:'#031d39',color:'#0177fe',border:'1px solid #0090ff',height:'209px'}} placeholder="your message...."></textarea>
          </div>
          <div className="col-md-7" style ={{color:'#2f7fd8'}}>
          <div className="col-md-12 pad"></div>
            <form className="form-inline">
              <input type="email" className="form-control" style ={{background:'#031d39',color:'#0177fe',border:'1px solid #0090ff',width: "587px"}} placeholder="Your email..."/>
              <button type="button"className="btn btn-primary" style={{marginLeft:"15px",color: "#0b2347"}}>send</button>
              <i className="fa fa-facebook-official"style={{marginLeft:"15px"}}></i>
              <i className="fa fa-twitter-square"style={{marginLeft:"15px"}}></i>
              <i className="fa fa-envelope"style={{marginLeft:"15px"}}></i>
            </form>
          </div>
      </div>
     </div>
    </div>
  );
}

export default Home;
