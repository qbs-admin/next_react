export default {
    output: 'export', // Enables static export
    trailingSlash: true, // Adds trailing slashes for static hosting
    assetPrefix: process.env.NODE_ENV === 'production' ? 'http://localhost/my_app/' : '', // Set asset prefix only in production
  };
  