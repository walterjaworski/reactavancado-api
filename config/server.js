module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      // secret: env('ADMIN_JWT_SECRET', '36c3321aa2e7e30e267d9c898debb900'),
      secret: env('ADMIN_JWT_SECRET', 'dl++o3SHPz6/S8aeur0jqgPU4YwITmrgfeD7LtYZ4BUk3U1kUO6cjtofKnbBKNyVH2e00P+3e3ylOa/51lGXGg=='),
    },
  },
});
