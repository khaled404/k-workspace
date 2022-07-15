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
        ? 'http://localhost:8080'
        : 'https://k-backend.onrender.com',
    //TODO: add production keys
    searchConfig: {
      appId: 'R2IYF7ETH7',
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'docsearch',
    },
  },
};

module.exports = withNx(nextConfig);
