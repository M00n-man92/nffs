// css for fonts
import "./App.css";
import Display from "./layouts/display";
// import Products from "./layouts/display/products/item";
import Intro from "./layouts/header/intro";
import NavBar from "./layouts/header/navbar";
function App() {
  return (
    <div className="App" >
      <Intro />
      <NavBar />
      <Display />
      {/* <div style={{marginTop:"19%",marginLeft:"8%", marginRight:"8%", width:"100%", backgroundColor:"red", height:"150vh" }}> */}
        
      {/* </div> */}
    </div>
  );
}

export default App;
