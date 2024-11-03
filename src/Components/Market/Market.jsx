import Filters from "../Filters/Filters";
import Marketplace from "../Marketplace/Collection"
import './Market.css'
import Navbar from "../Navbar/Navbar";
const market=()=>{
    return(
        <>
       <Navbar></Navbar>
        <div className="comp">
            <Filters></Filters>
            <Marketplace></Marketplace>
        </div>
        </>
    )
}
export default market;