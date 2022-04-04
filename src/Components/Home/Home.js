import React from 'react';
import { Link } from 'react-router-dom';
import useComments from '../../hooks/useComments';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'





const Home = () => {
    const [comments, setComments] = useComments();
    // console.log(comments);
    return (
        <div className='mt-10'>
            <section className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center '>
                <div className='mt-5'>
                    <h1 className='text-gray-600 text-5xl font-bold drop-shadow-md text-center'>Feel 3D-4K Ultra HD !</h1>
                    <h1 className='text-purple-300 text-4xl font-semibold drop-shadow-md mt-3 text-center'>Mordern Monitor Shop ~</h1>
                    <p className='text-justify m-5 '>A good display can be very effective in the user experience. The properties of display devices have also improved a lot due to the innovation in Display Technologies. There are many types of computer monitors available right now, in the case of CRT monitor and plasma maybe not.</p>
                    <button className='m-5 bg-purple-300 hover:bg-purple-400 p-2 rounded text-white font-medium shadow-lg'>know More <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                <div className='mt-5'>
                    <img className='w-80 h-80 mx-auto' src="https://www.tradeinn.com/f/13842/138422421/xiaomi-bhr5133gl-34-wqhd-led-ips-144hz-curved-gaming-monitor.jpg" alt="" />
                </div>
            </section>

            <section className='mt-10 mb-10 mx-10 text-center' >
                <h1 className='text-3xl text-center font-bold text-green-200 hover:text-green-300 inline-block'>Customer Reviews {comments.slice(0,3).length}</h1>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center'>
                    {
                        comments.slice(0,3).map(comment =><Cart key={comment.id} cart={comment}/>)
                    }
                </div>
                <Link className='bg-purple-300 hover:bg-purple-400 text-gray-100 shadow hover:text-white p-1 font-bold rounded' to="/review">See All Review <FontAwesomeIcon icon={faArrowRight} /></Link>
            </section>
            
        </div>
    );
};

export default Home;