import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../css/adduser.css'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
import apiEndpoint from '../constants/apiEndpoint';
//function to add user
function AddUser() {
    const [input, setInput] = useState({
        name: "",
        email: "",
    });
    const [tableData, setTableData] = useState([])
    const [edit, setEditData] = useState(false)
    // const [error, setError] = useState({})

    useEffect(()=>{
        axios.get(`${apiEndpoint}/api/users`)
        .then((res)=>{
            console.log(res.data)
            setTableData(res.data.data)
        })
    }, [])
 
    // const navigate = useNavigate()
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })

    }
  
    //  function handleSubmit(e){
    //     e.preventDefault();
    //     if (input.id >=0) {
    //         const { name, email } = input
    //         const newTableData = tableData.map((user, index) => {
    //             if (index == input.id) {
    //                 return {name, email}
    //             }
    //             return user
    //         })
    //         setTableData(newTableData)
    //     } else {
    //         setTableData([...tableData, input])
    //     }
    //     setInput({
    //         name: "",
    //         email: ""
    //     });
    // }

    const handleSubmit = async event =>{
        event.preventDefault()
        // setError(Validation(input))
        try {
            const { name, email } = input
            const response =   
            await axios.post(`${apiEndpoint}/api/users`, {
                name,
                email,
            })
            if (input.id >=0) {
                const { name, email } = input
                const newTableData = tableData.map((user, index) => {
                    if (index == input.id) {
                        return {name, email}
                    }
                    return user
                })
                setTableData(newTableData)
            } else {
                setTableData([...tableData, input])
            }
            setInput({
                name: "",
                email: ""
            });
        } catch (error) {
            console.error("error",error)
        }
    }
    const handleDelete = ((index)=>{
        const filterData = tableData.filter((item, i)=>i!==index)
        setTableData(filterData)
    })
  const handleEdit=((index)=>{
    const editData = tableData[index]
    setInput({
        id: index,
        name: editData.name,
        email: editData.email,
    })
    setEditData(true)
  })
  
//   function navigateToDoList(){
//     navigate('/todolist')
//   }
  return (
    <>
    <div className='user-form'>
        <form onSubmit={handleSubmit} >
            <div>
            <label className='label-name'>
                 Name
            </label>
            <input className='input-name'
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder='enter your name'
                required
            />
            </div>
            <div>
                <label className='email-name'>
                    Email
                </label>
                <input className='input-email'
                name='email' value={input.email} onChange={handleChange} placeholder='enter your email' required
                />
            </div>
            <div>
                <button className='add-btn' type='submit' >
                {edit ? "update": "Add"}
                </button>
            </div>
        </form>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, i)=>(
                            <tr key={`tableData${i}`}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="edit-btn" onClick={()=>handleEdit(i)} >edit</button>
                                    <button className="delete-btn" onClick={()=>handleDelete(i)}>Delete</button>
                                    <Link to="/todolist">
                                    <button className='activity-btn'>activity</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    
    </>
  )
}

export default AddUser