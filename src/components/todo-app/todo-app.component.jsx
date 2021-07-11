import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';

import './todo-app.styles.scss';

import api from '../../utils/api';

import InputTodo from '../input-todo/input-todo.component';
import TodoList from '../todo-list/todo-list.component';
import ListFooter from '../list-footer/list-footer.component';


const TODO_FILTERS = {
    SHOW_ALL: () => true,
    SHOW_ACTIVE: (todo) => !todo.completed,
    SHOW_COMPLETED: (todo) => todo.completed,
};

const TodoApp = () => {

    //=============================================================================         Network Call Handling

    const [restTodos, setRestTodos] = useState([]);

    const addRestTodo = async text => {
        try {
            await api.addRestTodo({
                id: uuidv1(),
                completed: false,
                text: text,
                key: 'rest',
            });
            getRestTodos();
        } catch (error) {
            console.error(error);
        }
    };
    
    const deleteRestTodo = async id => {
        try {
            await api.deleteRestTodo(id);
            getRestTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const completeRestTodo = async (id, text, completed) => {
        try {
            await api.updateRestTodo({
                id,
                text,
                completed: !completed,
            });
            getRestTodos();
        } catch (error) {
            console.error(error);
        }
    };
    
    const clearRestCompleted = () => filteredTodos.forEach(todo => todo.completed ? deleteRestTodo(todo.id) : null);

    // Reload the todo list from the database to see the latest changes
    const getRestTodos = async () => {
        let fetchedTodos = await api.getRestTodos();
        setRestTodos(fetchedTodos);
    };

    const actions = {
        addRestTodo: addRestTodo,
        deleteRestTodo: deleteRestTodo,
        completeRestTodo: completeRestTodo,
        clearRestCompleted: clearRestCompleted,
        getRestTodos: getRestTodos,
    };

    // Logger to track state change of restTodos
    useEffect(() => {
        getRestTodos()
    }, [setRestTodos]);

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //=============================================================================         Filter Handling

    const [filter, setFilter] = useState('SHOW_ALL');

    const filterHandler = (filter) => setFilter(filter);

    const filteredTodos = restTodos.filter(TODO_FILTERS[filter]);

    const completedCount = restTodos.reduce(
        (accumulator, todo) => todo.completed ? accumulator + 1 : accumulator,
        0
    );

    const activeCount = restTodos.length - completedCount;

    const anyTodoCompleted = restTodos.some(todo => todo.completed);
    

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    const onToggleAll = () => {
        if (allSelected) {
            filteredTodos.forEach(todo => actions.completeRestTodo(todo.id, todo.text, true));
        }
        if (!allSelected) {
            filteredTodos.forEach(todo => actions.completeRestTodo(todo.id, todo.text, false));
        }
    };

    const allSelected = filteredTodos.every(todo => todo.completed);
    
    return (
        <div className='todoapp'>
            <div className='todos-container'>
                <InputTodo addTodo={ addRestTodo } />
                <TodoList
                    filteredTodos={ filteredTodos }
                    actions={ actions }
                    allSelected={ allSelected }
                    onToggleAll={ onToggleAll }
                />
                <ListFooter
                    completedCount={ completedCount }
                    activeCount={ activeCount }
                    filter={ filter }
                    onShowFiltered={ filterHandler }
                    onClearCompleted={ clearRestCompleted }
                    anyTodoCompleted={ anyTodoCompleted }
                />
            </div>
        </div>
    );
};

export default TodoApp;