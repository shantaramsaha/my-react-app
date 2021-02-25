import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks =['Amir Khan','Salman Khan','Ronjit Mollik','Joshim Uddin','Salman Khan']
const products=[
  {name:'Photoshop',price:'$89.99'},
  {name:'Bookshop',price:'$456.99'},
  {name: 'Illustrator',price:'$70.99'},
  {name:'PDF  Reader',price:'$9.99'},
  {name:'watch',price:'$10.99'}

]
// const nayokNames=nayoks.map(nayok=>nayok);
// console.log(nayokNames);

// const productNames = products.map(product=>product);
// console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a innocent person</p>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Users></Users>
        <ul>{
          nayoks.map(nayok=> <li>{nayok}</li>)
          }
         {
           products.map(product=><li>{product.name}</li>)
         }
        </ul>
        {
          products.map(pd=><Product product={pd}></Product>)
        }
        
        
        <Person name="Samim" hobby="Good work"></Person>
        <Person></Person>
    
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then (res =>res.json())
  .then (data=> setUsers(data));
  }, [])
  return(

    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} .... {user.phone } ... {user.email} </li>)
        }
      </ul>
    </div>
  )
}

function Counter() {

 const [count, setCount] = useState(10);
 const handleIncrease =() => setCount(count + 1);

  return(
    <div>
      <h1>count: {count} </h1>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      <button onClick= {() => setCount(count + 1)} >increase</button>
    </div>
  )
} 

function Product(props) {
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'cyan',
    width:'300px',
    float:'right'
  }
  const{name,price}=props.product;
  console.log(name,price)
  return(
    <div style={productStyle}>
       <h3>{name}</h3>
      <h5> {price} </h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  return(
    <div style={{border:'2px solid red',width:'300px',margin:'5px',borderRadius:'10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession:{props.hobby} </p>
    </div>
  )
}

export default App;
