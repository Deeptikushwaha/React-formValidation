import styles from "./Navigation.module.css";

const Navigation=() => {
    
    return (
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
         <img src='/images/amazon.png' alt='logo'></img>
        </div> 
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
     </nav>
      );
  };

  export default Navigation;
  