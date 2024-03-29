import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCart = ({cart}) => {
    const {img,body,ratting,name} = cart;
    return (
        <div className='text-center m-5 border-2 bg-slate-200 hover:bg-slate-300 rounded'>
            <img className='w-15 h-15 mx-auto rounded-full mt-10' src={img} alt="" />
            <h1 className='mt-3 text-xl'>{name}</h1>
            <p className='text-green-500 font-bold pt-2 pb-5'>Ratting: {ratting}<FontAwesomeIcon className='text-yellow-300' icon={faStar}/></p>
            <p className='bg-slate-300 hover:bg-slate-400 text-justify p-5'>{body}</p>

        </div>
    );
};

export default ReviewCart;