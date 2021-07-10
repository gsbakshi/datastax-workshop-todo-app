import React from 'react';

const Todo = ({ todo, completeRestTodo, deleteRestTodo }) => (
    <div className='todo-container'>
        <div className={ `{todo.completed}` } >
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={ todo.completed }
                    onChange={ () => completeRestTodo(todo.id, todo.text, todo.completed) }
                />
                <label>{ todo.text }</label>
                <button className='destroy' onClick={ () => deleteRestTodo(todo.id) } />
            </div>
        </div>
    </div>
);

export default Todo;