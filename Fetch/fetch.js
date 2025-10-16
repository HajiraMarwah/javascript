document.getElementById('loadUsers').addEventListener('click', () => {
  const userUrl = 'https://jsonplaceholder.typicode.com/users';

  fetch(userUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .then(users => {
      console.log('📦 User API Response:', users); // Log full JSON
      const table = document.getElementById('userTable');
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = ''; // Clear previous rows

      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
        `;
        tbody.appendChild(row);
      });

      table.style.display = 'table';
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
});
