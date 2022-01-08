import React, {useState, useEffect} from "react"; //import default 
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipe';
import Axios from "axios";


function App() {
  
  const [search, searchItems] = useState(""); 
  const [veg, searchVeg] = useState("veg");
  const [recipes, searchRecipes] = useState([]);

  const applicationID = "7627e36c";
  const applicationKey = "4b4f9e8142e67e86dbb76f538c22b668";

  useEffect( () => {
      
    getRecipes();
  }, []);

  const getRecipes = async() =>{
    const getResult = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${applicationID}&app_key=${applicationKey}`);
    
    searchRecipes(getResult.data.hits);
  };

  const getVeg = async() =>{
    const getResult = await Axios.get(`https://api.edamam.com/search?q=${veg}&app_id=${applicationID}&app_key=${applicationKey}`);
    
    searchRecipes(getResult.data.hits);
  };
  const onInputChange = e => {
    searchItems(e.target.value);
    searchVeg(e.target.value);
  };

  const onSearch = () =>{
    getRecipes();
  }
  const onVegSearch = () =>{
    getVeg();
  }

  return (
    <div className="App">
      
      <Header search={search} onInputChange={onInputChange} onSearch={onSearch} onVegSearch={onVegSearch}/>
      <div className="container">
        <Recipes recipes={recipes}/>
      </div>
    </div>
  );
};

export default App;
