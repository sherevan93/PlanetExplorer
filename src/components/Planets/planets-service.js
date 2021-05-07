const API = "https://swapi.dev/api";

export const getPlanets = () => {
  return fetch(`${API}/planets/`).then((data) => data.json());
};

// export const getUsers = () => {
//   return fetch("../").then((data) => data.json());
// };
