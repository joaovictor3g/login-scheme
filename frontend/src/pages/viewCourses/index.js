import React, { useEffect } from 'react'
import api from '../../services/api';

export default function ListAllCourses() {
    
    useEffect(() => {
        List();
    });
    
    async function List() {
        const response = await api.get('/list');

        console.log(response.data);
    }
    
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}
