import React, { useState } from 'react';

import './input-todo.styles.scss';

const InputTodo = ({ addTodo }) => {

    const [input, setInput] = useState('');
    
    const onInputChange = event => {
        const value = event.target.value;
        // console.log('onInputChange :     ' + input);
        setInput(value);
    };

    const onEnter = async event => {
        const value = input.trim();
        // console.log('trimmed input :     ' + value);
        try {
            if (event.which === 13) {
                if (value.length !== 0) {
                    addTodo(value);
                    // console.log('onAddTodo :     ' + value);
                    setInput('');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='input-container'>
            <input
                className='new-todo'
                type='text'
                placeholder='What needs to be done?'
                // autoFocus={ true }
                value={ input }
                onChange={ onInputChange }
                onKeyDown={ onEnter }
            />
        </div>
    );
};

export default InputTodo;