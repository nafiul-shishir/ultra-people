import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const userSalary = cart[i];
        total = total + +userSalary.salary;
    }

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number (precision);
    }
    return (
        <div>
            <h4> Friends Summary: {cart.length}</h4>
            <h5> Total Salary: ${formatNumber(total)}</h5>
        </div>
    );
};

export default Cart;