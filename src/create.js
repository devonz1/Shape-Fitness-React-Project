
import { Button, Form } from "semantic-ui-react"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Create = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');


    const navigate = useNavigate();
    const postData = () => {
        axios.post(`https://63ffaf129f84491029832a21.mockapi.io/Employees`, {
            name,
            title,

        }).then(() => {
            navigate('/read')
        })
    }

    return (


        <>
            <div>
                <Form className='formed'>
                    <Form.Field>
                        <label className="col1">Employee Name </label>
                        <input placeholder=' Name' size="60" onChange={(e) => setName(e.target.value)} />
                    </Form.Field>

                    <Form.Field>
                        <label className="col2" > Title</label>
                        <input placeholder='Title' size="60" onChange={(e) => setTitle(e.target.value)} />
                    </Form.Field>
                    <br></br>
                    <Button secondary onClick={postData} type='submit'>Submit</Button>
                </Form>
            </div>
        </>
    )

}

export default Create;