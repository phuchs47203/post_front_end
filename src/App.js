import React from 'react';
import './App.css';
import { ListPost, AddPost } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../src/container/reduxApp/store";
import Details from './container/Details/Details';
const App = () => {
    return (
        <BrowserRouter>
            <div className='section__padding'>
                <Provider store={store}>
                    {/* <div className='gradient__bg'> */}
                    <AddPost />
                    {/* </div> */}
                    <ListPost />
                </Provider>
            </div>
            <Routes>
                <Route path="/details" exact element={<Details />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App