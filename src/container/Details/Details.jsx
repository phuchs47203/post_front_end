import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { post } = useParams();
    return (
        <div className='details' id='details'>
            <div className='details-img'>
                <img src={post.image} alt="" />
            </div>
            <div>
                <h6>{post.timeStamp}</h6>
                <p>{post.post}</p>
            </div>
        </div>
    )
}

export default Details