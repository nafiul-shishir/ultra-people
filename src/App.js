
import { useEffect, useState } from 'react';
import data from '../src/Data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import People from './People/People';
import Cart from './People/Cart/Cart';

function App() {
  const [cart,setCart] = useState([])
  const [people,setPeople] = useState([]);
  

  useEffect(() => {
    setPeople(data)
    
  },[])

  const handleAddPerson = (people) => {
    console.log('person added',people);
    const newCart = [...cart,people]
    setCart(newCart)
  
  }
  return (
   <div className="collection-container">
     <div className="user-info">
      {
       people.map(people => <People handleAddPerson ={handleAddPerson}people={people} key={people.id}> </People>)
      }
     </div>
     <div className="cart-info">
      <h2 > <FontAwesomeIcon icon={faUserPlus} />  {cart.length} </h2>
      <Cart cart={cart}></Cart>
     </div>
   </div>
   
  );
}

export default App;
