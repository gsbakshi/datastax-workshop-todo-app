import React, { useState, useEffect } from 'react';
import { uuid } from 'assert-plus';

import './todo-app.styles.scss';

import api from '../../utils/api';

import InputTodo from '../input-todo/input-todo.component';
import TodoList from '../todo-list/todo-list.component';
import ListFooter from '../list-footer/list-footer.component';

import ITEMS_LIST from '../todo-list/todo-list.data';


const TODO_FILTERS = {
    SHOW_ALL: () => true,
    SHOW_ACTIVE: (todo) => !todo.completed,
    SHOW_COMPLETED: (todo) => todo.completed,
};

const TodoApp = () => {

    //=============================================================================         Network Call Handling

    const [restTodos, setRestTodos] = useState([...ITEMS_LIST, ...ITEMS_LIST]);

    const addRestTodo = async text => {
        try {
            await api.addRestTodo({
                id: uuid.v1(),
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
    
    const clearRestCompleted = async () => {
        try {
            let data = api.getRestTodos();
            data.forEach((todo) => {
                completeRestTodo(todo.id, todo.text, true);
            });
        } catch (error) {
            console.error(error);
        }
    };

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
    useEffect(() => getRestTodos(), [restTodos]);

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
    
    return (
        <div className='todoapp'>
            <div className='todos-container'>
                <InputTodo addTodo={ addRestTodo } />
                <TodoList
                    filteredTodos={ filteredTodos }
                    actions={ actions }
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