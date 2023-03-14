 
import { Table, Button } from 'semantic-ui-react'
import { useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Read = () => {
  
    const [APIData, setAPIData] = useState([]);


    useEffect(() => {
        axios.get(`https://63ffaf129f84491029832a21.mockapi.io/Employees`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])


    const setData = (data) => {
        let { id,name, title} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Title', title);
       

    }


    const onDelete = (id) => {
        axios.delete(`https://63ffaf129f84491029832a21.mockapi.io/Employees/${id}`)
            .then(() => {
                getData();
            })


        const getData = () => {
            axios.get(`https://63ffaf129f84491029832a21.mockapi.io/Employees`)
                .then((getData) => {
                    setAPIData(getData.data);

                })
        }
    }





    return (
        <div> 
        <Table celled className='row'>
            <Table.Header>
                <Table.Row  >
                    <Table.HeaderCell >Name</Table.HeaderCell>
                    <Table.HeaderCell>Title  </Table.HeaderCell>
                    <Table.HeaderCell>Delete  </Table.HeaderCell>
                    <Table.HeaderCell>Update </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
            {APIData.map((data) => {
                        return (
                <Table.Row key={data.id}>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.title}</Table.Cell>
                  <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell> 
                    <Link to="/update"><Table.Cell><Button onClick={() => setData(data)}>Update</Button> </Table.Cell></Link>
                </Table.Row>
          
          )
        })}

            </Table.Body>

            <Table.Footer>
            </Table.Footer>
        </Table>
        </div>
    )

}






export default Read;