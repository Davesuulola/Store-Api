// import { useCart } from "react-use-cart"
import Card from "./Card";
import data from "./data"
import { Link } from "react-router-dom";
import { CartProvider } from "react-use-cart"
import Cart from "./Cart";
const Home=()=>{
    
// const [data, setData] = useState([])

// const apiGet =()=>{
//  fetch('https://fakestoreapi.com/products')
//  .then(response => response.json())
//  .then(json => {
//    console.log(json);
//    setData(json);
//  })
// }; 
//  useEffect(()=>{
//    apiGet();
//  }, []);
  //  const { addItem } = useCart();
   return(
<CartProvider>
<>
<h1>
  Welcome to shoppify
</h1>
<Link to={"/Cart"}>Cart</Link>
<div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
  {data.productData.map((item, index)=>{
return(

<Card key={index} 
image={item.image}
 category={item.category}
 item={item}
 price={item.price}
 title={item.title} 
description={item.description} />

)
  })}
  </div>
</>
<div style={{display:"none"}}>
  
<Cart/>
</div>
</CartProvider>
    )
}
export default Home;