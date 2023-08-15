import React, { useEffect } from 'react'
import { Post } from "../index";
import { useDispatch, useSelector } from 'react-redux';
import { addAllPost, selectPost } from '../../container/features/postSlice';
import axios from 'axios';
import './listpost.css';
const ListPost = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);
    useEffect(() => {
        const fetchData = () => {
            const response = axios
                .get("http://localhost:8080/api/v1/post")
                .then((response) => {
                    console.log(response.data);
                    dispatch(addAllPost(response.data));
                });
        };
        fetchData();
        console.log(posts);
    }, []);
    return (
        <div className='listpost'>
            <div className='listpost-title'>
                <h1 className='gradient__text'>Discover</h1>
            </div>
            <div className='listpost-content'>
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>

        </div>
    );
};

export default ListPost;