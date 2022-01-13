import React from "react";

const Veg = () =>{
    
    return(
        <>
            <h2>Todays Deals</h2>
        <div class="d-flex flex-wrap">
            <div class="card m-2 ">
                <div class="card-header">
                    <h2 class="card-title">boAt Neck Band</h2>
                    <p class="card-subtitle">50% off</p>
                </div>
                <div class="card-body">
                    <img src="../public/assets/neckband.jpg" alt="food" class="w-100" />
                    <p class="card-text">&#8377; 1999/-</p>
                </div>
                <div class="card-footer">
                     <button class="btn btn-danger w-100">
                        <span class="bi bi-cart4"> Add to cart</span>
                     </button>
                </div>
            </div>

            <div class="card m-2">
                <div class="card-header">
                    <h2 class="card-title">Laptop</h2>
                    <p class="card-subtitle">20% off</p>
                </div>
                <div class="card-body">
                    <img src="../public/assets/laptop.jpg" alt="food" class="w-100" />
                    <p class="card-text">&#8377; 42999/-</p>
                </div>
                <div class="card-footer">
                     <button class="btn btn-danger w-100">
                        <span class="bi bi-cart4"> Add to cart</span>
                     </button>
                </div>
            </div>
        </div>
            </>

        
    );
};

export default Veg;