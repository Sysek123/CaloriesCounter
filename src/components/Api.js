import { clear } from '@testing-library/user-event/dist/clear';
import axios from 'axios';
import { useState } from 'react'

const Api = (props) => {
        
const params = {
    api_key: 'LZEHNsUtzvGxaEkpg5Qnkyh7GtJmV4Yy1W0L2pGf',
    dataType: "Foundation",
    pagesize: 4 ,
  }
  
  const [productKcal, setProductKcal] = useState([]);
  const [product, setProduct] = useState([]);
  const [gram, setGrams] = useState('');

  
  let signal = axios.CancelToken.source(); 
  
  function handleChange(event) {
    setProduct(event.target.value);
  }

  function handleChangee(event) {
    setGrams(event.target.value)

  }
  
function handleSubmit(event) {
    event.preventDefault();
    console.log(product)
    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${product}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`, {
        cancelToken: signal.token,
    })
        .then(res => {
          console.log(res.data)
          if(res.data.pageList.length > 0){
            for (var i = 1; i <= 100; i++)
            if(res.data.foods[0].foodNutrients[i].nutrientName == 'Energy (Atwater General Factors)' || res.data.foods[0].foodNutrients[i].nutrientName == 'Energy'){
              const posts = res.data.foods[0].foodNutrients[i].value * (gram/100)
              setProductKcal(posts);
              props.onAdd(posts)
              props.afterAdd()
              setGrams('');
              setProduct('')
              console.log(productKcal)
              return
            }
        } else {
          console.log('not in data base')
        }
        }).catch(err => {
        console.log(err); 
    });
  }
  

  return (
  <form onSubmit={handleSubmit}>
    <div className='header' >
      <input type="text" placeholder='add name of a product' onChange={handleChange} value={product}/>
      <input type='' placeholder='add wegiht in grams' onChange={handleChangee} value={gram}/>
      <button type="submit" className='product-button' >+</button>
      <p>{productKcal} Kcal</p>
    </div>
  </form>
  )
}

export default Api