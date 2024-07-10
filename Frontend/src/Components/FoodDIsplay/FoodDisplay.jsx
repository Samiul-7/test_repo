import React,{useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from "../../context/StoreContext";
import FoodItems from '../FoodItems/FoodItems';

const FoodDisplay =({catagory}) => {
    const {All_products}= useContext(StoreContext)
    return(
        <div className='food-display' id='food-display'>
            <h2>
                Our products
                
            </h2>
            <div className="food_display_list">
                    {
                        All_products.map((item,index)=>{

                            if(catagory==="ALL"||catagory===item.catagory){

                            return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                            }
                            
                        })
                    }

                </div>

        </div>
    )
}
export default FoodDisplay;