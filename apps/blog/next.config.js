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
        ? 'http://localhost:4200/api/'
        : 'https://k-workspace.vercel.app/api/',
  },
};

module.exports = withNx(nextConfig);
