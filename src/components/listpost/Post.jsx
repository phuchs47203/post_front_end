import React from 'react'
// import Image from "next/image";
import './post.css';
const Post = ({ post }) => {
    return (
        <div className='post' key={post.id}>

            {post.image != null && (
                <div className='post-img'>
                    <img src={post.image}
                        alt="" />
                </div>
            )}
            <div className='post-content'>
                <h6>{post.timeStamp}</h6>
                <p>{post.post}</p>
            </div>
        </div>
    );
};

export default Post;