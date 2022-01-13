import React, {useState, useEffect} from "react"; //import default 
import './App.css';

import Header from './components/Header';
import Recipes from './components/Recipe';
import Veg from './components/Veg';
import Non_Veg from './components/Non_Veg';

import Chinese from './components/Chinese';
import Axios from "axios";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



function App() {
  
  const [search, searchItems] = useState(""); 
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

  const onInputChange = e => {
    searchItems(e.target.value);
    
  };

  const onSearch = () =>{
    getRecipes();
  }
 

  return (
    <>
      <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearch={onSearch}
      />
      
      
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      <Router>
        <Routes> 
          <Route path="/Veg" element={<Veg />}></Route>
          <Route path="/Non_Veg" element={<Non_Veg />}></Route>
          <Route path="/Chinese" element={<Chinese />}></Route>
        </Routes>
      </Router>
      <section className="mt-2">
        <iframe name="frameBody" title="myFrame" width="100%"></iframe>
      </section>
    </div>
    </>
  );
};

export default App;
