import React from "react";

const RecipeItem = (props) =>{
    const {name, image, ingredientLines} = props;
    return(
        <div className="col-md-3 mb-2" >
                        <div className="card">
                            <div className="card-header">
                                <img alt="imG" src={image} className="img-fluid" />
                            </div>
                            <div className="card-body text-center">
                                <h4>{name}</h4>
                            </div>
                            <div className="card-footer">
                                <ul className="list-group">
                                    {
                                        ingredientLines.map(ingredient => (
                                            <li className="list-group-item">{ingredient}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
    )
}

export default RecipeItem