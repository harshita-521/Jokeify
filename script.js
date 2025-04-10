fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(jokeData => {
    const jokeText = jokeData.joke;
    const jokeElement = document.getElementById('jokeText');
    
    jokeElement.innerHTML = jokeText;
  })
  .catch(error => {
    console.error('Error fetching joke:', error);
  });