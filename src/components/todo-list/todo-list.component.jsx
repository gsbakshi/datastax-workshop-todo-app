import React from 'react';

import './todo-list.styles.scss';

import Todo from '../todo/todo.component';

const TodoList = ({ filteredTodos, actions }) => {

    // const onToggleAll = () => {
    //         filteredTodos.forEach(todo => todo.id === id ? todo.completed : todo);
    //     };

    // const allSelected = () => filteredTodos.every(todo => todo.completed);

    return (
        <section className='list-container'>
            <input
                id="toggle-all"
                type="checkbox"
                className="toggle-all"
                // checked={ allSelected }
                // onChange={ onToggleAll }
            />
            <label htmlFor="toggle-all" />
            <div className='todo-list' >
                {
                    filteredTodos.map(
                        (todo) => (
                            <Todo
                                key={ todo.id }
                                todo={ todo }
                                { ...actions }
                            />
                        )
                    )
                }
            </div>
            
        </section>
    );
};

export default TodoList;