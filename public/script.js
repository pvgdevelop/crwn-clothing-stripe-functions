document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetch-btn');
  const responseText = document.getElementById('response-output');

  const fetchKantoBtn = document.getElementById('fetch-kanto-btn');
  const fetchHoennBtn = document.getElementById('fetch-hoenn-btn');

  fetchBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/hello-world').then(
      (response) => response.json()
    );

    responseText.innerText = JSON.stringify(response);
  });

  fetchKantoBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/pokedex', {
      method: 'POST',
      body: JSON.stringify({
        region: 'kanto',
      }),
    }).then((response) => response.json());

    responseText.innerText = JSON.stringify(response);
  });

  fetchHoennBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/pokedex', {
      method: 'POST',
      body: JSON.stringify({
        region: 'hoenn',
      }),
    }).then((response) => response.json());

    responseText.innerText = JSON.stringify(response);
  });
});
