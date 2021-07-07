import React, { useState } from 'react';

const Item = ({ item }) => {
    const [bg, setBg] = useState('');

    const handleMouseOver = () => {
        setBg('red');
    };
    
    const handleMouseOut = () => {
        setBg('');
    };

    return (
        <p
            onMouseOver={ handleMouseOver }
            onMouseOut={ handleMouseOut }
            style={{background: bg}}
        >{ item }</p>
    );
};

export default Item;