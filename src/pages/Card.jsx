 
 import { useCart } from "react-use-cart";
 const Card=(props)=>{
  const { addItem } = useCart(); 

   return(
<>

{/* {data.map((item)=> ( */}
<div className="card ms-5" style={{width:"12rem", }}>

<img className="card-img-top" style={{height:"12rem"}} src={props.image} alt="" />

<div  className="card-body">

  <h4 className="card-title">{props.title}</h4>

  
  <p className="card-text">{props.description}</p>
</div>

<ul style={{marginTop:"-15px"}} className="list-group list-group-flush">
    <li className="list-group-item">{props.category}</li>
    <li className="list-group-item">${props.price}</li>
    {/* <li className="list-group-item"><Rate allowHalf defaultValue={item.rating.rate} /></li> */}

    
  </ul>
<button onClick={()=>addItem(props.item)}  className="btn btn-success">Add to cart</button>
</div>
{/* ))} */}
</>
     )
 }
 export default Card;