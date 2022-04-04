import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    const {name,body,img,ratting}=cart;
    return (
        <div className='text-center mt-10 mb-10 border-2 bg-slate-200  rounded'>
            <img className='w-15 h-15 mx-auto rounded-full mt-10' src={img} alt="" />
            <h1 className='mt-3 text-xl'>{name}</h1>
            <p className='text-green-500 font-bold pt-2 pb-5'>Rating:{ratting}<FontAwesomeIcon className='text-yellow-300' icon={faStar}/></p>
            <p className='text-justify p-5'>{body}</p>

        </div>
    );
};

export default Cart;