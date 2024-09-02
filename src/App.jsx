import { useState ,useEffect} from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";

function App() {
  const [searchFilter,setSearchFilter] = useState('')


  return (
    <div>
      <ProductSearch setSearchFilter={setSearchFilter}  searchFilter={searchFilter}/>
      <ProductList searchFilter={searchFilter} />
      
    </div>
  );
}

export default App;
