const https = require('https');

const obtenerPresonajes = () => {
  return new Promise((resolve, reject) => {
    https
      .get(`https://swapi.dev/api/people/`, (response) => {
        //console.log(responce);
        let datos = '';
        response.on('data', (chunk) => {
          datos += chunk;
        });

        response.on('end', () => {
          datos = JSON.parse(datos);
          resolve(datos);
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
};

const init = async () => {
  const { results } = await obtenerPresonajes();
  console.log(results);
};
init();
