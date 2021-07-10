import React, { useState } from 'react';

import Todo from '../todo/todo.component';
import ListFooter from '../list-footer/list-footer.component';

const TODO_FILTERS = {
    SHOW_ALL: () => true,
    SHOW_ACTIVE: (todo) => !todo.completed,
    SHOW_COMPLETED: (todo) => todo.completed,
};

const TodoList = ({ todos, actions }) => {
    const [filter, setFilter] = useState('SHOW_ALL');

    const filterHandler = (filter) => {
        setFilter(filter);
    };

    const clearCompletedTodosHandler = () => {
        actions.clearCompletedTodosHandler();
    };

    const renderListFooter = (completedCount) => {
        const activeCount = todos.length - completedCount;
        if (todos.length) {
            return (
                <ListFooter
                    completedCount={ completedCount }
                    activeCount={ activeCount }
                    filter={ filter }
                    onShowFiltered={ filterHandler }
                    onClearCompleted={ clearCompletedTodosHandler }
                />
            );
        };
    };

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    const completedCount = todos.reduce(
        (accumulator, todo) => todo.completed ? accumulator + 1 : accumulator,
        0
    );

    return (
        <section className='main' >
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
            {
                renderListFooter(completedCount)
            }
        </section>
    );
};

export default TodoList;