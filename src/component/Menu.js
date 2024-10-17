import React from "react";
import data from "../logic/dlist"; // Import the data
import "./Menu.css";
import tempDishImg from "../component/compImages/tempDishImg.png";


function Menu() {
    const { dependencys, menu } = data;
    console.log(data);
    // Group dishes by dtype
    const groupedDishes = menu.reduce((acc, dish) => {
        if (!acc[dish.dtype]) {
            acc[dish.dtype] = [];
        }
        acc[dish.dtype].push(dish);
        return acc;
    }, {});

    return (
        <div className="menu">
            {
                Object.keys(groupedDishes).map(dtype => (
                    <div key={dtype} className="dtypeSection">
                        <h1 className="title">{dependencys[dtype]}</h1>
                        {
                            groupedDishes[dtype].map(dish => (
                                <div key={dish.name} id={dish.dtype} className="menuWrapper">
                                    <div className="imgContainer">
                                        <img src={tempDishImg} alt="dishImg" className="img"></img>
                                        <button className="btnPopUp"></button>
                                    </div>
                                    <div className="namePricePanel">
                                        <h2>{dish.name}</h2>
                                        <h2>{dish.price}</h2>
                                    </div>
                                    <h4 className="dis">{dish.description}</h4>
                                    <hr className="engeLine"></hr>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Menu;
