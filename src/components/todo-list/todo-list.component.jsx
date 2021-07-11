import React from 'react';

import './todo-list.styles.scss';

import Todo from '../todo/todo.component';
import ToggleAll from '../toggle-all/toggle-all.component';

const TodoList = ({ filteredTodos, actions, onToggleAll, allSelected }) => (
    <section className='list-container'>
        <ToggleAll
            onToggleAll={ onToggleAll }
            allSelected={ allSelected }
        />
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

export default TodoList;