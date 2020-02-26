const API_KEY = 'SYYHeSIxzQFgmoVD0fs9brrCRzXwAYFAgfapNMI6';

const url = (path: string) => `https://api.nasa.gov/neo/rest/v1/neo${path}?api_key=${API_KEY}`;

export const apiSearchByID = (id: string) =>
  fetch(url(`/${id}`))
    .then(response => response.json());
