import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css'

const Userssection = () => {
    const [users, setusers]=useState([]);
    
    const fetchusers =()=>{
        axios.get("http://localhost:4000/all")
        .then((res)=>{
            if(res.data.getusers){
                setusers(res.data.getusers)
            }
            else{
                console.log("fetch error");
                
            }
        })
        .catch((error)=>{
            console.log("error", error);
        })
    }

    useEffect(()=>{
        fetchusers()
    },[])
    return (
        <div className="table-container">
    <table>
        <thead>
            <tr className='table-row-1'>
                <th className='table-head'>SI.no</th>
                <th className='table-head'>Name</th>
                <th className='table-head'>Email</th>
                <th className='table-head'>Mobile</th>
                <th className='table-head'>Department</th>
                <th className='table-head'>Gender</th>
            </tr>
        </thead>
        <tbody>
            {users.map((each, index) => (
                <tr key={index} className='table-row-2'>
                    <td className='table-data'>{index + 1}</td>
                    <td className='table-data'>{each.name}</td>
                    <td className='table-data'>{each.email}</td>
                    <td className='table-data'>{each.mobile}</td>
                    <td className='table-data'>{each.department}</td>
                    <td className='table-data'>{each.gender}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
}

export default Userssection;