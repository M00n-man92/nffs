// css for fonts
import "./App.css";
import Display from "./layouts/display";
// import Products from "./layouts/display/products/item";
import Intro from "./layouts/header/intro";
import NavBar from "./layouts/header/navbar";
import DataTable from "./example/Table"
import ProductList from "./layouts/display/productList";

function App() {
const iColumns = ["hme","apartmet","pepoke","heartbreak","my bad","the past is the paset","if i die today"]
const iRows = ["uncle iroh", "prince zuko", "start lord","drax","groot"]  
return (
    <div className="App" >
      <Intro />
      <NavBar />
      <ProductList />
      {/* <Display /> */}

      {/* <DataTable 
        table={{ columns: iColumns, rows: iRows }}
        isSorted={false}
        entriesPerPage
        showTotalEntries
      /> */}
      {/* <div style={{marginTop:"19%",marginLeft:"8%", marginRight:"8%", width:"100%", backgroundColor:"red", height:"150vh" }}> */}
        
      {/* </div> */}
    </div>
  );
}

export default App;
