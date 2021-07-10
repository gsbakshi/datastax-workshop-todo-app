import React, { useState, useEffect } from 'react';

import './todo-app.styles.scss';

import InputTodo from '../../components/input-todo/input-todo.component';
import TodoList from '../../components/todo-list/todo-list.component';
import ITEMS_LIST from '../../components/todo-list/todo-list.data';

const TodoApp = () => {
    const [restTodos, setRestTodos] = useState([...ITEMS_LIST]);

    const addRestTodo = async text => {
        try {
            console.log('Add Rest Todos :       ' + text);
            getRestTodos();
        } catch (error) {
            console.error(error);
        }
    };
    
    const deleteRestTodo = async id => {
        try {
            console.log('Delete Rest Todos :       ' + id);
            getRestTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const completeRestTodo = async (id, text, completed) => {
        try {
            console.log('Complete Rest Todos :       ' + id + ' ,   ' + text + ' ,   ' + completed);
            getRestTodos();
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
            console.log('-----------    Clear Rest Completed Todos    -----------');
            setRestTodos([]);
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

    useEffect(() => {
        console.log("STATE Change:", restTodos)
        getRestTodos();
    }, [restTodos]);

    
    return (
        <div className='todos-container'>
            <div className='input-container'>
                <InputTodo addTodo={ addRestTodo } />
            </div>
            <div className='list-container'>
                <TodoList todos={ restTodos } actions={ actions } />
            </div>

        </div>
    );
};

export default TodoApp;