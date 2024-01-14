import React from 'react';
import Item from './Item';
import './Department.css';

function Department(props)
{
    // props.items contains items object with name description count
    return (
        <div className='department-component'>
            <p className='department-name'>{props.name}</p> 
            {props.items.map((item) => <Item name={item['name']} description={item['description']} count={item['count']}/>)}
        </div>
    );
}

export default Department;