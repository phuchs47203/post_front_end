import React, { useState } from 'react'
// import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import './post.css';
const Post = ({ post }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <div className='post' key={post.id}>
            <div
                onClick={() => setToggleMenu(true)}
                className='post-frame'>
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
            <div className='post-toggle'>
                {
                    toggleMenu && (
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            animate={{ opacity: toggleMenu ? 1 : 0, x: 0 }}
                            transition={{ duration: 0.85 }}
                            className='post-toggle-post'
                        >
                            <AiOutlineFullscreenExit
                                className='post-hix'
                                onClick={() => setToggleMenu(false)}
                            />
                            {post.image != null && (
                                <div className='post-toggle-post-img'>
                                    <img src={post.image}
                                        alt="" />
                                </div>
                            )}
                            <div className='post-toggle-post-content'>
                                <p>{post.post}</p>
                                <h6>{post.timeStamp}</h6>
                            </div>
                        </motion.div>
                    )
                }
            </div>



        </div>
    );
};

export default Post;