const API_KEY = 'SYYHeSIxzQFgmoVD0fs9brrCRzXwAYFAgfapNMI6';

const url = (path: string) => {
  const host = 'https://api.nasa.gov/neo/rest/v1';
  const separator = path.indexOf('?') > -1 ? '&' : '?';
  const accessToken = separator + `api_key=${API_KEY}`;

  return `${host}${path}${accessToken}`;
};

export const apiSearchByID = (id: string) => (
  fetch(url(`/neo/${id}`))
    .then(response => response.json())
);

export const apiSearchByDate = (start: string, end: string) => (
  fetch(url(`/feed?start_date=${start}&end_date=${end}`))
    .then(response => response.json())
);
