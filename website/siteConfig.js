const currentYear = new Date().getFullYear();

const siteConfig = {
  projectName: 'richardzcode',
  title: 'Richard Zhang',
  tagline: 'Coder',
  copyright: 'Copyright © ' + currentYear + ' Richard Zhang',

  rootUrl: 'https://richardzcode.github.io',
  baseUrl: '',

  icon: 'img/dochameleon.png',
  favicon: 'img/favicon.png',

  js: [
    'https://buttons.github.io/buttons.js'
  ],

  noHeaderNav: true
};

module.exports = siteConfig;
