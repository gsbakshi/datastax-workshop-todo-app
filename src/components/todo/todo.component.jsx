import React from 'react';

import './todo.styles.scss';

const Todo = ({ todo, completeRestTodo, deleteRestTodo }) => (
    <div className={ `${todo.completed ? 'completed' : ''} todo-container` } >
        <div className='view'>
            <input
                className='toggle'
                type='checkbox'
                checked={ todo.completed }
                onChange={ () => completeRestTodo(todo.id, todo.text, todo.completed) }
            />
            <label>{ todo.text }</label>
            <button
                className='destroy'
                onClick={ () => deleteRestTodo(todo.id) }
            />
        </div>
    </div>
);

export default Todo;