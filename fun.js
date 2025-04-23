
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
//   // Output: 0, 1, 2 (after 1 second)
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
//   // Output: 0, 1, 2 (after 1 second)


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(function(data) {
  const userList = document.getElementById('user-list');
  data.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email})`;
    userList.appendChild(li);
  });
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

const todos = document.getElementById('todos')

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(todo => {
//             const li = document.createElement('li');
//             li.textContent = `${todo.title}`
//             todos.appendChild(li);
//         })
//     })

// const todoList = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await response.json();
//     data.forEach(todo => {
//         const li = document.createElement("");
//         li.textContent = `${todo.title}`
//         todos.appendChild(li)
//     })

// }
// todoList();

const todoList2 = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const data = response.data;
    data.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = `${todo.title}`
        todos.appendChild(li)
    })

}
todoList2();
