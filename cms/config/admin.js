module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '633b906d8670cf46c25d63aaa2418d25'),
  },
});
