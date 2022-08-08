import React, { useState, useEffect } from 'react';
import Cardz from './Cardz';
import classes from './Item.module.css';
import {useSelector} from 'react-redux';

export default function Item() {
    const [data, setData] = useState([]);
    const num1 = useSelector(state => state.num1);
    const num2 = useSelector(state => state.num2);
    const minVal = useSelector(state => state.minVal);
    const maxVal = useSelector(state => state.maxVal);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((dataa) => setData(dataa));
    }, []);
    let items;

    if (!(minVal && maxVal)) {
        items = data.map((item) => {
          if (!(item.id <= num2 && item.id >= num1)) {
            return;
          }
          return (
            <Cardz
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              rating={item.rating.rate}
              price={item.price}
              category={item.category}
            />
          );
        });
      }
    
      if (minVal || maxVal) {
        items = data.filter((item) => {
          return item.price >= minVal && item.price <= maxVal;
        });
     
        items = items.map((item, index) => {
          console.log(item);
            if (index <= num2 - 1 && index >= num1 - 1) {
              return (
                <Cardz
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  rating={item.rating.rate}
                  price={item.price}
                  category={item.category}
                />
              );
            } 
        });
      }
    
      if(items.length === 0){
        return <p className={classes.noItem}>No item available in this range</p>;
      }
    
      return (
        items.map((item) => item)
        );
}

