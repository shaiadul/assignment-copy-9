import React from 'react';
import useComments from '../../hooks/useComments';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [comments, setComments] = useComments();
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-2 items-center justify-center'>
            {
                comments.map(comment => <ReviewCart key={comment.id} cart={comment}/>)
            }
        </div>
    );
};

export default Review;