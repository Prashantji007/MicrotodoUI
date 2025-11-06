// src/config.js

const config = {
    GET_TASKS_API_BASE_URL: process.env.REACT_APP_GET_TASKS_API_BASE_URL || 'http://4.224.131.104/get-task',
    DELETE_TASK_API_BASE_URL: process.env.REACT_APP_DELETE_TASK_API_BASE_URL || 'http://4.224.131.104/delete-task',
    CREATE_TASK_API_BASE_URL: process.env.REACT_APP_CREATE_TASK_API_BASE_URL || 'http://4.224.131.104/get-task',
  };
  
  export default config;
  
