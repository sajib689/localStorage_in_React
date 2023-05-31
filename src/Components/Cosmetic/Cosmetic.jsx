import React, { useEffect, useState } from 'react';
import './Cosmetic.css'
import { addToDb, remove } from '../../Utilities/fakedb';
const Cosmetic = () => {
  const [cosmetic, setCosmetic] = useState([])
  useEffect(() => {
    fetch('alldata.json')
    .then(res => res.json())
    .then(data => setCosmetic(data))
  },[])
    return (
        <div className='container'>
            {
                cosmetic.map(cos => ShowData(cos))
            }
        </div>
    );
};
function ShowData (props){
    // console.log(props.balance)
    const {_id, age, name, balance, gender,picture} = props
    const addToCart = (_id) => {
        addToDb(_id)
    }
    const addToCartParam = () => addToCart(_id)
    const removeData = _id => {
        // console.log('removing', _id)
        remove(_id)
    }
    return(
        <div className='sub-container'>
            
           <h5>Name: {name}</h5>
           <h4>Age: {age}</h4>
           <p>Price: {balance}</p>
           <p>Gender: {gender}</p>
           
            <button onClick={addToCartParam}>Add Cart</button>
            <button onClick={() => removeData(_id)}>Remove</button>
        </div>
    )
}
export default Cosmetic;