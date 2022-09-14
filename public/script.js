document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetch-btn');
  const responseText = document.getElementById('response-output');
  const fetchPokedexBtn = document.getElementById('fetch-pokedex-btn');

  fetchBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/hello-world').then(
      (response) => response.json()
    );

    responseText.innerText = JSON.stringify(response);
  });

  fetchPokedexBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/pokedex').then(
      (response) => response.json()
    );

    responseText.innerText = JSON.stringify(response);
  });
});
