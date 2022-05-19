import styles from './App.module.css';
import items from './components/allData';
import {useState} from 'react';
import Button from './components/Button';
import Menu from './components/Menu';

function App() {
  const allType = ['All', ...new Set(items.map(item =>item.type))];
  // console.log(allType)
   const [menuItem, setMenuitem]  = useState(items);
   const [buttons]  = useState(allType);
    
  
   const filter =(button)=>{

    if(button ==='All'){
      setMenuitem(items);
      return;
    }
     const filteredData = items.filter(item =>item.type === button);
     setMenuitem(filteredData);
   }
  return (
   <div>
     <header className={styles.AppHeader}>
          <h2>Our Menu</h2>
          <span className={styles.Bottom}></span>
          <div className={styles.Button}>
             {/* passing the filter function/butons as props */}
            <Button button={buttons}  filter={filter}/>
          </div>
      </header>
      {/* <div>  */}
         <Menu  menuItem={menuItem}/>
      {/* </div> */}
     
   </div>
 
  );
}

export default App;
