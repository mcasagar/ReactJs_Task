import React from "react";
import axios from "axios";
import { useFormik } from 'formik';
import { response } from "express";

export default class ConsumeAPIComponent extends React.Component
{
  constructor(props){
      super(props);
      this.state={
          foods :[]
      }
  }
  componentDidMount(){
      axios.get('http://127.0.0.1:9090/food')
      .then(response => {
          this.setState({
              foods:response.data
          })
      })
  }
  render(){
      return(
          <>
            <h2>Recipe</h2>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-9">
                    <table className="table">
                         <thead>
                             <tr>
                                 <th>foodID</th>
                                 <th>foodname</th>
                                 <th>gredient</th>
                                 <th>category</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                this.state.foods.map(food =>
                                    <tr key={food.foodId}>
                                        <td>{food.foodId}</td>
                                        <td>{food.foodname}</td>
                                        <td>{food.gredient}</td>
                                        <td>{food.category}</td>
                                    </tr>
                                    )
                             }
                         </tbody>
                    </table>
                </div>
            </div>
          </>
      )
  }
}