import React from 'react';
//import Breakfast from './Breakfast/Breakfast';
//import Dinner from './Dinner/Dinner';
//import Lunch from './Lunch/Lunch';

const FoodCategory = () => {
    return (
        <div>

            {/* <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner> */}
        <section className="food-catagories-aria">
            <div className="container">
                <div className="row">
                    <div className="catagories m-auto py-5">
                        <ul className="d-flex ">
                            <li><button className={breakfastActive ? 'active btn' : 'btn'}
                                onClick={() => selectHandler('breakfast')}
                            >Breakfast</button></li>
                            <li><button className={lunchActive ? 'active btn' : 'btn'}
                                onClick={() => selectHandler('lunch')}
                            >Lunch</button></li>
                            <li><button className={dinnerActive ? 'active btn' : 'btn'}
                                onClick={() => selectHandler('dinner')}
                            >Dinner</button></li>
                        </ul>
                       
                    </div>
                    <div className="f-right d-flex align-items-center text-danger">
                    <p className="see-all" onClick={()=> props.history.push('/foods')} >See All</p>
                    </div>
                </div>
                <div className="row food-items">
                    {items.map(item => <FoodItem key={item.id} item={item} />)}
                    <div className="w-100"></div>
                    <div className="checkout-btn-aria m-auto">
                        <button 
                            onClick={()=>props.history.push('/cart')}
                            className={disabled ? 'btn disabled my-4 text-center text-capitalize' :'btn checkout-btn  my-4 text-center text-capitalize' } 
                         disabled={disabled} >Checkout your food</button>
                    </div>
                </div>
            </div>
        </section>
            
        </div>
    );
};

export default FoodCategory;