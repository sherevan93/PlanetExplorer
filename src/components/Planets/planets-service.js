const API = "https://swapi.dev/api";

export const getPlanets = () => {
  return fetch(`${API}/planets/`).then((data) => data.json());
};
