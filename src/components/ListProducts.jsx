import Pagination from "../containers/Pagination";
import Products from "../containers/Products";
import "../styles/listProducts.css";
import { getProductsXNameThunk} from "../store/slice/products.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const ListProducts = ({ dataProduct }) => {

  const dispatch = useDispatch()
  const [str, setStr] = useState("")
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(6)
  const initialPoke = (page - 1) * pokePerPage
  const finalePoke = page * pokePerPage
  //se pone && porque pokemon es undefinden
  const maxPage = dataProduct && dataProduct.length / pokePerPage

  const handleKeyEnter = (e) => {
    if(e.key === "Enter") dispatch( getProductsXNameThunk(str) )
  }

  return (
    <div className="container-products">
      <div className="container-header-product">
        {/* <div className="container-select" >
          <label htmlFor="">Filtrar por:</label>
          <select className="input-select">
            <option value="0">-Seleccione-</option>
            <option value="1">Precio</option>
            <option value="2">Nombre</option>
          </select>
        </div> */}
        {/* <div className="container-input">
          <input type="text" onKeyDown={handleKeyEnter} onChange={(e) => setStr(e.target.value) } className="input-search" placeholder="Ingrese texto" />
        </div> */}
      </div>
     <Pagination page={page} maxPage={maxPage} setPage={setPage} /> 
      <div className="container-body-product">
        {
            dataProduct.slice(initialPoke, finalePoke).map(item =>   <Products key={item.id} dataProduct={item} /> )
        }
      
      </div>
    </div>
  );
};

export default ListProducts;
