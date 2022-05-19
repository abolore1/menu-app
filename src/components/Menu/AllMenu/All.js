import Aux from "../../hoc/Auxillary"
import styles from  './All.module.css'

const all =(props)=> (
    <Aux>
     <div  className={styles.MainContainer}>
         <div  className={styles.Container}>
            <img src={props.menu.pix} width='18%' height='165' alt="NOT DISPLAYING" /> 
            <div className={styles.Content}>
                <h4 className={styles.Meal}>{props.menu.meal} </h4>
                <h4 className={styles.Price}>{props.menu.price}</h4> 
            </div>
            <span className={styles.Line}>..............................................................................................</span>
            <p className={styles.Description}>{props.menu.description}</p>
           
         </div>
       
     </div>
     </Aux>
)

export default all


