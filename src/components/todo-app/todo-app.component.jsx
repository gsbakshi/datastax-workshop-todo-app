import React, { useState, useEffect } from 'react';

import './todo-app.styles.scss';

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

    const [restTodos, setRestTodos] = useState([...ITEMS_LIST]);

    const addRestTodo = async text => {
        try {
            restTodos.push({
                id: text,
                completed: false,
                text: text,
            });
            getRestTodos();
            console.log('Add Rest Todos :       ' + text);
        } catch (error) {
            console.error(error);
        }
    };
    
    const deleteRestTodo = async id => {
        try {
            let todos = restTodos.filter(todo => todo.id !== id);
            setRestTodos([...todos]);
            console.log('Rest Todos :       ' + todos);
            getRestTodos();
            console.log('Delete Rest Todos :       ' + id);
        } catch (error) {
            console.error(error);
        }
    };

    const completeRestTodo = async (id, text, completed) => {
        try {
            getRestTodos();
            console.log('Complete Rest Todos :       ' + id + ' ,   ' + text + ' ,   ' + completed);
        } catch (error) {
            console.error(error);
        }
    };
    
    const getRestTodos = async () => {
        try {
            console.log('-----------    Get Rest Todos    -----------');
        } catch (error) {
            console.error(error);
        }
    };
    
    const clearRestCompleted = async () => {
        try {
            setRestTodos([]);
            console.log('-----------    Clear Rest Completed Todos    -----------');
        } catch (error) {
            console.error(error);
        }
    };

    const actions = {
        addRestTodo: addRestTodo,
        deleteRestTodo: deleteRestTodo,
        completeRestTodo: completeRestTodo,
        clearRestCompleted: clearRestCompleted,
        getRestTodos: getRestTodos
    };

    // Logger to track state change of restTodos
    useEffect(() => {
        console.log("STATE Change:", restTodos)
        getRestTodos();
    }, [restTodos]);

    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //=============================================================================         Filter Handling

    const [filter, setFilter] = useState('SHOW_ALL');

    const filterHandler = (filter) => setFilter(filter);

    const clearCompletedTodosHandler = () => actions.clearCompletedTodosHandler();

    const filteredTodos = restTodos.filter(TODO_FILTERS[filter]);

    const completedCount = restTodos.reduce(
        (accumulator, todo) => todo.completed ? accumulator + 1 : accumulator,
        0
    );

    const activeCount = restTodos.length - completedCount;

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
                    onClearCompleted={ clearCompletedTodosHandler }
                />
            </div>
        </div>
    );
};

export default TodoApp;