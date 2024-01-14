import React from 'react';
import './Delete.css';

function Delete()
{
    const endpoint = 'http://127.0.0.1:8000/delete';

    const handleClick = async () => {
        try {
            await fetch(endpoint);
        } catch (error) {
            console.error("Error sending data:", error);
        }
        window.location.reload(false);
    };
    return (
    <button className='delete-button' onClick={handleClick}>Delete All</button>
    )
}

export default Delete;