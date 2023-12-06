
import data from '../data.json';
import './App.css';

import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilterBar } from './components/TaskFilterBar';

import { useState, useEffect } from 'react';


export const App = () => {

    // Estado actual de la lista de tareas
    const [taskListHook, setTaskListHook] = useState(data);

    // Estado para determinar cual de los filtros es el que está activo
    const [activeFilter, setActiveFilter] = useState('todas')

    // Lista de tareas filtrada
    const [filteredTaskList, setFilteredTaskList] = useState(taskListHook)

    const addTask = (nombre)=>{

        const lastId = taskListHook.length > 0 ? taskListHook[taskListHook.length - 1].id : 1;

        const newTask = {
            id: lastId + 1,
            nombre, 
            completada: false
        };

        const taskList = [...taskListHook];
        taskList.push(newTask);
        setTaskListHook(taskList);

    };

    const completeTask = (id) => {
        const taskList = taskListHook.map(task => {
            if (task.id === id) {
                return {...task, completada: !task.completada};
            };
            return task;
        });
        setTaskListHook(taskList);         
    };

    const deleteTask = (id) => {
        const taskList = taskListHook.filter(task => task.id !== id);
        setTaskListHook(taskList);        
    };

    // Función para mostrar todas las tareas de la lista de tareas actual.
    const showAllTasks = () => {
        setActiveFilter('todas')
    }

    // Función para mostrar las tareas activas de la lista de tareas actual.
    const showActiveTasks = () => {
        setActiveFilter('activas')
    }

    // Función para mostrar las tareas completadas de la lista de tareas actual.
    const showCompletedTasks = () => {
        setActiveFilter('completadas')
    }

    // Función para eliminar las tareas que ya fueron completadas.
    const clearComplete = () => {
        const taskList = taskListHook.filter(task => !task.completada);
        setTaskListHook(taskList);  
    }

    // Esto se va a ejecutar cada vez que cambie activeFilter o taskListHook
    useEffect(() => {
        if(activeFilter === 'todas'){
            setFilteredTaskList(taskListHook)
        } else if (activeFilter === 'activas') {
            const activeTasks = taskListHook.filter(task => task.completada === false)
            setFilteredTaskList(activeTasks)
        } else if (activeFilter === 'completadas') {
            const completedTasks = taskListHook.filter(task => task.completada === true)
            setFilteredTaskList(completedTasks)
        }
    },[activeFilter,taskListHook])

    return (
        <div>
            <TaskForm addTaskKey = {addTask}/>
            <TaskList 
                taskListKey = {filteredTaskList} 
                completeTaskKey = {completeTask} 
                deleteTaskKey={deleteTask}
            />
            <TaskFilterBar
                activeFilterKey={activeFilter}
                totalKey={taskListHook.length}
                showAllTasksKey={showAllTasks}
                showActiveTasksKey={showActiveTasks}
                showCompletedTasksKey={showCompletedTasks}
                clearCompleteKey={clearComplete}
            />
        </div>
    );
};