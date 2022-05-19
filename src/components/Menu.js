import React from 'react';
import styles from  './All.module.css'

export default function Menu({menuItem}) {
  return (
    <div className={styles.Flex}>
       {
        //  21:16
         menuItem.map(item =>{
           return <div  className={styles.Container} key={item.id} >
                 <img src={item.pix}  alt="NOT DISPLAYING" />
                 <div className={styles.Content} >
                   <span className={styles.MealPrice}>
                    <h4 className={styles.Meal}>{item.meal} </h4>
                    <h4 className={styles.Price}>{item.price}</h4> 
                   </span>
                    <span className={styles.Line}>..........................................................................................</span>
                    <p className={styles.Description}>{item.description}</p>
                  </div>
             </div>
         })
       }
    </div>
  )
}
