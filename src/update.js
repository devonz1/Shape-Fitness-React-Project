

import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Update = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');





    const [id, setID] = useState(null);
    const nav = useNavigate();
    const updateAPIData = () => {
        axios.put(`https://63ffaf129f84491029832a21.mockapi.io/Employees/${id}`, {
            name,
            title,
        }).then(() => {
            nav('/read')
        })



    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setTitle(localStorage.getItem('Title'));

    }, []);




    return (
        <>
            <>
                <div>
                    <Form className='formed'>
                        <Form.Field>
                            <label className='col1'>Employee Name </label>
                            <input placeholder='First Name' value={name} size="60" onChange={(e) => setName(e.target.value)} />
                        </Form.Field>
                        <br></br>
                        <Form.Field>
                            <label className='col1'> Title</label>
                            <input placeholder='Title' value={title} size="60" onChange={(e) => setTitle(e.target.value)} />
                        </Form.Field>
                        <br></br>
                        <Button type='submit' onClick={updateAPIData}>Update</Button>
                    </Form>
                </div>
            </>


        </>


    )




}

export default Update;