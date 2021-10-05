async function httpClient(API_URL) {
  const data = await window.fetch(API_URL);
  const pokemons = await data.json();
  return pokemons;
};

export default httpClient;