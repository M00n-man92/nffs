// css class
import "../../styles/display/display.scss";
import Products from "./products/index.js";

import Front from "./front";
import Search from "./search";

export default function Display() {
  return (
    <div className="display">
      <Front />
      <div className="adjusting">
      <Search />
      </div>
      <div >
        <Products />
        
      </div>
    </div>
  )
}
