import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Copy.css';

// Copy button

function Copy()
{
    const endpoint = 'http://127.0.0.1:8000/copy';
    const [text, setText] = useState('');

      const getData = async () => {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setText(data.message.split('\\n'));
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately
        }
    };

    return (
        <CopyToClipboard text={text} onCopy={getData}>
          <button className='copy-button' disabled={text[0] === ''}>Copy All</button>
        </CopyToClipboard>
        );
}

export default Copy;