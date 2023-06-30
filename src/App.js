import logo from './logo.svg';
import './App.css';
import './messaging_init_in_sw'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
 
      <div
        // class="row align-items-center pt-5 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0 "
        style={{
          backgroundImage: `url(./images/4.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh",
          position: "relative",
        
        
        }}
      >
      <Navbar/>
 
        
      {/* <div class="card" style="width: 18rem;"> 
      <h1 sx={{color:'white'}} > Push Notification </h1> 
      </div>
        */}

      <div className="card">
  <div className="card-body">
  Push Notification  </div>
</div>




        </div>       
     </>
  );
}

export default App;
