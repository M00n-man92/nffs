import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// css for fonts
import "./App.css";
import Display from "./layouts/display";
// import Products from "./layouts/display/products/item";
import Intro from "./layouts/header/intro";
import NavBar from "./layouts/header/navbar";
import DataTable from "./example/Table"
import ProductList from "./layouts/display/productList";
import Property from "./layouts/display/property"
import Blog from "./layouts/pages/blog/item";
import SingleBlog from "./layouts/pages/blog";
import Firms from "./layouts/pages/firms";
import Firm from "./layouts/pages/firms/firm"
import Products from "./layouts/pages/products";
function App() {
  const iColumns = ["hme", "apartmet", "pepoke", "heartbreak", "my bad", "the past is the paset", "if i die today"]
  const iRows = ["uncle iroh", "prince zuko", "start lord", "drax", "groot"]
  return (

    <div className="App" >
      {/* <Intro /> */}
      <NavBar />
      <Routes>
        <Route path="/search/:token" element={<ProductList />} />
        <Route path="/" element={<Display />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/blog/:blogname" element={<SingleBlog />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/firms" element={<Firms />} />
        <Route path="/firm/:firmnameorid" element={<Firm />} />
        <Route path="/project/:projectnameorid" element={<Property />} />
        <Route path="/products" element={<Products />} />

      </Routes>



      {/* <Property /> */}
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
