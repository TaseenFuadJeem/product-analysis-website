import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';

const CustomerReview = () => {

    const [reviews] = useReviews();
    const [review1, review2, review3] = reviews;

    return (
        <div className='my-10'>
            <h1 className='text-4xl text-center font-semibold'>Our Product Reviews</h1>
            <div className='grid lg:grid-cols-3 gap-20 my-16'>

                <div className='p-5 h-96 rounded-lg border-2'>
                    <img className='mx-auto rounded-full' src={review1?.img} alt="" />
                    <h2 className='text-xl font-medium my-2 text-center'>{review1?.name}</h2>
                    <div className='text-center text-yellow-500 my-3'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                    <p title={review1?.review}>{review1?.review.length > 200 ? review1?.review.slice(0, 200) + "....." : review1?.review}</p>
                </div>

                <div className='p-5 h-96 rounded-lg border-2'>
                    <img className='mx-auto rounded-full' src={review2?.img} alt="" />
                    <h2 className='text-xl font-medium my-2 text-center'>{review2?.name}</h2>
                    <div className='text-center text-yellow-500 my-3'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                    <p title={review2?.review}>{review2?.review.length > 200 ? review2?.review.slice(0, 200) + "....." : review2?.review}</p>
                </div>

                <div className='p-5 h-96 rounded-lg border-2'>
                    <img className='mx-auto rounded-full' src={review3?.img} alt="" />
                    <h2 className='text-xl font-medium my-2 text-center'>{review3?.name}</h2>
                    <div className='text-center text-yellow-500 my-3'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                    <p title={review3?.review}>{review3?.review.length > 200 ? review3?.review.slice(0, 200) + "....." : review3?.review}</p>
                </div>
            </div>
            <div className='flex justify-center'>

                <Link to="/reviews">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-6">
                        SHOW ALL
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CustomerReview;