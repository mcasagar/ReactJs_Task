import React from "react";
import { NavLink } from "react-router-dom";


const Header = (props) =>{
    const {search, onInputChange, onSearch} = props;
    
    return(
        <>
           
        <div className="mt-4 p-5 bg-primary text-white rounded d-flex justify-content-between">
            <h1 className="display-1"><i className="fas fa-utensils"></i> Sagar Food Recipe</h1>
            
            <nav className="navbar navbar-expand-lg navbar-dark mt-1">
            <div className="container-fluid">
                 <button className="navbar-toggler" data-bs-target="#menulist" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="#" className="navbar-brand">
                    <span className="bi bi-cart4"></span>  Food Categories
                </a>
               
                <div className="collapse navbar-collapse" id="menulist">
                    <div className="d-flex justify-content-between">
                        <ul className="navbar-nav">
                           <li className="nav-item">
                           <a href="Veg.js" className="nav-link">veg</a>
                            </li>
                            <li className="nav-item">
                                <a href="Non_Veg.js" className="nav-link">Non-veg</a>
                            </li>
                            <li className="nav-item">
                                <a href="Chinese.js" className="nav-link">Chainess</a>
                            </li>
                        </ul>
                        <div className="input-group w-50">
                            
                                <input type="text" placeholder="Enter Recipes.." className="form-control"  value={search} onChange={onInputChange} />
                                <button className="btn btn-warning" onClick={onSearch}>Search</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            data-bs-target="#menulist"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="#" className="navbar-brand">
            <span className="bi bi-cart4"></span> Video Demo
          </a>

          <div className="collapse navbar-collapse" id="menulist">
            <div className="d-flex justify-content-between">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href="https://www.youtube.com/embed/Nru8aadeN0I"
                    target="frameBody"
                    className="nav-link"
                  >
                    Veg Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.youtube.com/watch?v=jwyge5daKUQ&t=67s"
                    target="_blank"
                    className="nav-link"
                  >
                    Nonv-veg Recipe
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.youtube.com/watch?v=YieIRSCHndM&list=PL00a0G6_TRLXzWrRKb38oDfxBa5iAq1xk" className="nav-link">
                    Chinese
                  </a>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
        </>
        
    );
};

export default Header;