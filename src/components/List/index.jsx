import React from 'react'
import './List.css'
import {FaList, FaClock, FaVideo,FaUser } from 'react-icons/fa'
import ListItem from './ListItem';
function List() {
    return (
        <div className="container">
            <div className="list__warapper">
                <span className="list">
                    <FaList/>
                    <ListItem visitor="90+"info='Belajar dengan 40 lebih  course tersedia'/>
                </span>
                <span className="list">
                    <FaVideo/>
                    <ListItem visitor="2000+"info='Memiliki lebih dari 2000 video'/>
                </span>
                <span className="list">
                    <FaClock/>
                    <ListItem visitor="1500+"info='Total waktu lebih dari 15.000 jam'/>
                </span>
                <span className="list">
                    <FaUser/>
                    <ListItem visitor="1.000.000+"info='Bergabung bersama lebih dari 1.000.000+ Member'/>
                </span>
            </div>
        </div>
        
    
    )
}

export default List;
