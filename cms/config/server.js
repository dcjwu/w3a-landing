module.exports = ({ env }) => ({
  host: env('HOST', 'https://web3app.agency'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
