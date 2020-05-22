import React, {useState, useEffect} from 'react';
import classes from './CountryPicker.module.css';
import {  NativeSelect , FormControl } from '@material-ui/core';

import { fetchCountries } from '../../Api';

const Countries = () => {

  const [countires, setCountries] = useState([]);
  //console.log(countires);

  useEffect(() => {
     const fetchAPI = async () => {
        setCountries(await fetchCountries());
     }
    fetchAPI();
   
  }, []);

    return (
        <FormControl className={classes.formControl} >
          <NativeSelect defaultValue="" >
              <option value="">Global</option>
             
              {countires.map( (country,id)=> <option key={id} value={country}>
                  {country}
              </option> ) }

          </NativeSelect>
      </FormControl>
    );
}
export default Countries;