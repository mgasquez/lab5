import create from 'zustand';

export const useStore = create ((set) => ({
    todos: [ 
        {id: 1,
            task:"libro1",
            completed: false},
        {id: 2,
            task:"libro2",
            completed: true},
        {id: 3,
            task:"libro3",
            completed: false}],
    addTodo: (task) => {
            set((state) => ({
                todos: [...state.todos,
                    {
                      id: task.length,
                      task,
                      completed: false
                    }
                  ]
                }));
              },
    handleToggle: (id) => {
            set((state) => ({
                  todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                  )
                }));
            },  
    removeTodo: (id) => {
                set((state) => ({
                  todos: state.todos.filter((todo) => todo.id !== id)
                }));
              },
    editTodo: (id, inputEdit) => {
             
                set((state) => ({
                  todos: state.todos.filter((todo) => todo.id == id ?{ ...todo, task: inputEdit } : todo )
                }));
              },
}))