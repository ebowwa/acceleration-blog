const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js'
});

module.exports = withMDX(withNextra({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}));
