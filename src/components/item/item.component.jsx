import React, { useState } from 'react';

const Item = ({ item }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => setIsChecked(!isChecked);

    return (
        <div>
            <input
                type='checkbox'
                checked={ isChecked }
                onChange={ handleChange }
            />
            <label>{ item }</label>
        </div>
    );
};

export default Item;