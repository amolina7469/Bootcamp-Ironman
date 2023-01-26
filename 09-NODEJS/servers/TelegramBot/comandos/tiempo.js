const axios = require('axios');

module.exports = async (ctx) => {
  const ciudad = ctx.message.text.split(" ").slice(1, ctx.message.text.length).join(" ").toString().toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_API_KEY}&units=metric`;

  try {
    const { data } = await axios.get(url);
    const response = `Tiempo en ${ciudad}:
    🌡Temperatura: ${data.main.temp}º,
    🌞Máxima: ${data.main.temp_max}º,
    ❄Mínima: ${data.main.temp_min}º,
    💧Humedad: ${data.main.humidity}% `;
    ctx.reply(response);
  } catch (err) {
    ctx.reply('Ha ocurrido un error, vuelve a intentarlo');
  }
}