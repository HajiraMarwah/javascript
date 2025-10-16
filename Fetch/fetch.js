document.getElementById('loadData').addEventListener('click', () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          document.getElementById('output').textContent = 'Error: ' + error.message;
        });
    });