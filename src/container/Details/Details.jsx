import React from 'react'

const Details = ({ imgURL, timeStamp, post }) => {
    return (
        <div className='details' id='details'>
            <div className='details-img'>
                <img src={imgURL} alt="" />
            </div>
            <div>
                <h6>{timeStamp}</h6>
                <p>{post}</p>
            </div>

        </div>
    )
}

export default Details