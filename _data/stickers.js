require('dotenv').config();
const fetch = require('node-fetch');

module.exports = () => {
  
  return fetch('https://api.airtable.com/v0/appN16FUXQMKEFXMG/Sticker%20Info', {
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`
    }
  })
  .then(response => response.json())
  .then(data => data.records);
}