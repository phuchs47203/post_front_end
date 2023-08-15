import { React, useRef, useState } from 'react'
import { IoMdPhotos } from "react-icons/io";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { createStore, combineReducers } from 'redux';

// import { useSession } from "next-auth/react";
import axios from 'axios';

import './addpost.css';
import { useDispatch, useSelector, Provider } from "react-redux";
import { addPost } from '../../container/features/postSlice';

const AddPost = () => {
    const POST_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
    // const { data: session, status } = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setimageToPost] = useState(null);
    const dispatch = useDispatch();
    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setimageToPost(e.target.result);
            };
        }
    };
    const removeImage = () => {
        setimageToPost(null);
    };
    const [errorMessageLimit, setErrorMessageLimit] = useState('');
    const LimitCharacters = (e) => {
        if (inputRef.current.value.length > 800) {
            setErrorMessageLimit('The content of the post should not be larger than 800 characters');
        }
        else {
            setErrorMessageLimit('');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();


        if (!inputRef.current.value) {
            setErrorMessageText("Text is not empty");
            return
        }
        setErrorMessageText('');

        if (!imageToPost) {
            setErrorMessageIMG("Image is not empty");
            return;
        }
        setErrorMessageIMG('');

        const formData = new FormData();



        formData.append("file", imageToPost);
        console.log("imagetopost" + imageToPost);
        formData.append("post", inputRef.current.value);
        // formData.append("name", session?.user.id);
        // formData.append("email", session?.user.email);
        axios
            .post(POST_CLONE_ENDPOINT, formData, {
                headers: { Accept: "application/json" },
            })
            .then((response) => {
                inputRef.current.value = "";
                dispatch(addPost(response.data));
                console.log(response.data);
                removeImage();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [errorMessageText, setErrorMessageText] = useState('');
    const [errorMessageIMG, setErrorMessageIMG] = useState('');

    return (
        <div className='addpost'>
            <div className='addpost-text'>
                {/* <input
                    ref={inputRef}
                    type="text"
                    placeholder='what is your mind' /> */}
                <textarea name=""
                    placeholder="What's your mind"
                    onChange={LimitCharacters}
                    ref={inputRef}
                    id=""
                    cols="" rows="4"></textarea>
                {errorMessageText &&
                    <p
                        className="error-message">
                        {errorMessageText}
                    </p>}
                {errorMessageLimit &&
                    <p
                        className="error-message">
                        {errorMessageLimit}
                    </p>}
            </div>

            {imageToPost && (
                <div
                    onClick={removeImage}
                    className='imgToPost'>
                    <img src={imageToPost} alt="" />
                    <RiDeleteBin6Line className="Ridepete" />
                </div>
            )}
            <div>
                {errorMessageIMG && <p className="error-message">{errorMessageIMG}</p>}

            </div>
            <div
                onClick={handleClick}
                className='addpost-img'>
                <IoMdPhotos className='imgphoto' />
                <input
                    onChange={addImageToPost}
                    ref={hiddenFileInput}
                    type="file"
                    accept='image/*'
                    hidden
                />
            </div>
            <div className='addpost-btn'>
                <button
                    className='btn-transition'
                    onClick={handleSubmit}
                    type='button'>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddPost;