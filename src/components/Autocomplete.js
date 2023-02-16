import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react'

const Completebox = () => {
    
const params = {
    api_key: 'LZEHNsUtzvGxaEkpg5Qnkyh7GtJmV4Yy1W0L2pGf',
    query: 'food',
    dataType: ["Survey (FNDDS)"],
    pagesize: 4 ,
  }
  
  const api_url = 
  `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
  

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          api_url
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
    console.log(data)
  }, [])
  
    return (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={products}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="product" />}
        />
      );
    }

const products = [
    { label: 'rice', year: 360 },
    { label: 'chicken', year: 120 },
]

export default Completebox