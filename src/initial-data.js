const initialData = {
    tasks :{
    'tasks-1' : {id: 'tasks-1', content : "Create Login page"},
    'tasks-2' : {id: 'tasks-2', content : "Create Dashboard"},
    'tasks-3' : {id: 'tasks-3', content : "Project modal"},
    'tasks-4' : {id: 'tasks-4', content : "Find an internship"},
    'tasks-5' : {id: 'tasks-5', content : "Learn React native"},
    'tasks-6' : {id: 'tasks-6', content : "Graph & stats"},
    },
    columns : {
        'column-1': {
            id : 'column-1',
            title: 'To do',
            taskIds: ['tasks-1', 'tasks-2', 'tasks-3', 'tasks-4'],
        },
        'column-2': {
            id : 'column-2',
            title: 'In progress',
            taskIds: ['tasks-6'],
        },
        'column-3': {
            id : 'column-3',
            title: 'Done',
            taskIds: ['tasks-5'],
        },
    },
    
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;