// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4200/api'
        : 'https://k-workspace.vercel.app/api',

    mongodburl:
      'mongodb+srv://khaled:XM8.Gff5tqTt8*m@cluster0.gzzx2.mongodb.net/blog?retryWrites=true&w=majority',
    secretToken: 'secretTokenA(Wu]`,s,86%ih4%xOET#sKG|W=b[SuperSecretToken',
  },
};

module.exports = withNx(nextConfig);
