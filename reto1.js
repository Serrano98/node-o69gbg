const https = require('https');

function obtenerPokemon(pokemon) {
  return new Promise((resolve, reject) => {
    https
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
        let datos = '';

        resp.on('data', (chunk) => {
          datos += chunk;
        });

        resp.on('end', () => {
          datos = JSON.parse(JSON.stringify(datos));
          resolve(datos);
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
}

const pokemones = ['bulbasur'];

async function atraparPokemones(pokemones) {
  //pokemon atrapado / nombre del prokemon / tipo de pokemon
  try {
    let resultados = await Promise.all(
      pokemones.map(async (pokemon) => {
        const { name, types } = await obtenerPokemon(pokemon);
        console.log(
          `Pokemon atrapado ${name} +'El tipo' (${types[0].type.name})`
        );
        return resultado;
      })
    );
    return resultados;
  } catch (error) {
    console.error('Error', error);
  }
}

atraparPokemones(pokemones).then();
