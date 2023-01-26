const NodeGeocoder = require('node-geocoder');

module.exports = async (ctx) => {
  try {
    const options = {
      provider: 'google',
      apiKey: process.env.GOOGLE_API_KEY
    };
    const geocoder = NodeGeocoder(options);
    const calle = ctx.message.text.split(" ").slice(1, ctx.message.text.length).join(" ").toString().toLowerCase();
    const response = await geocoder.geocode(calle);
    ctx.replyWithLocation(response[0].latitude, response[0].longitude);
  } catch (err) {
    ctx.reply('Ha ocurrido un error, vuelve a intentarlo');
  }

}