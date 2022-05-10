// import logo from './logo.svg';
import { Rate } from "antd";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  
const [data, setData] = useState([])

const apiGet =()=>{
 fetch('https://fakestoreapi.com/products')
 .then(response => response.json())
 .then(json => {
   console.log(json);
   setData(json);
 })
}; 
 useEffect(()=>{
   apiGet();
 }, []);
  return (
    <div >


<div><button className='btn btn-primary' onClick={apiGet}>Fetch Api</button></div>

{data.map((item)=> (
//  <div className="card" style="width: 18rem;">
//   <img src="" className="card-img-top" alt=""/>
//   <div className="card-body">
//     <h5 className="card-title">{item.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">An item</li>
//     <li className="list-group-item">A second item</li>
//     <li className="list-group-item">A third item</li>
//   </ul>
//   <div className="card-body">
//     <a href="#" className="card-link">Card link</a>
//     <a href="#" className="card-link">Another link</a>
//   </div>

// </div>
<div className="card ms-5" style={{width:"18rem", display:"flex" }}>

<img className="card-img-top" src={item.image} alt="" />

<div key={item.id} className="card-body">

  <h5 className="card-title">{item.title}</h5>

  
  <p className="card-text">{item.description}</p>
</div>

<ul className="list-group list-group-flush">
    <li className="list-group-item">{item.category}</li>
    <li className="list-group-item">${item.price}</li>
    <li className="list-group-item"><Rate allowHalf defaultValue={item.rating.rate} /></li>

    
  </ul>

</div>
))}
    </div>
  );
}

export default App;