// Main Template
const ga = require('./ga');
const header = require('./header');
const footer = require('./footer');
const strings = require('../content/strings.json');

module.exports = function main(pageType, content, title, desc, link) {
  'use strict';
  let heading = title;
  let pageContent;
  let pageTitle;
  let pageOG;
  let urlCanonical = '';
  let path;
  let css;
  let js;
  const cssVersion = 1.2;
  const mainTitle = strings.title;

  if(desc === undefined || pageType === 'home') {
    desc = strings.desc;
  }

  // homepage
  if(pageType === 'home') {
    path = '';
    pageTitle = '';
    pageContent = '<div id="target"></div>';
    heading = 'Episodes';
    css = 'public/css/style.css';
    js = '<script src="public/js/min/home.min.js" type="text/javascript"></script>';
  }

  // episode page
  if(pageType === 'episode') {
    path = '../../';
    css = `public/css/episode.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    urlCanonical = `episodes/${link}`;
    js = '';
    //js = '<script src="../../public/js/min/episode.min.js" type="text/javascript"></script>';
  }

  // panelist page
  if(pageType === 'panelist') {
    path = '../../';
    css = `public/css/panelist.css?v=${cssVersion}`;
    pageContent = content;
    pageTitle = title + ' - ';
    js = '<script src="../../public/js/min/panelist.min.js" type="text/javascript"></script>';
  }

  return `<!DOCTYPE html>
          <html>
              <head>
                  <title>${pageTitle}${mainTitle}</title>
                  <meta name="description" content="${desc}">
                  <meta name="viewport" content="width=device-width">
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                  <link rel="alternate" type="application/rss+xml"
                   href="http://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss">
                  <meta property="og:image"
                   content="${pageOG}">
                  <link rel="icon" href="https://managerstable.com/favicon.ico" type="image/x-icon">
                  <link rel="canonical" href="https://managerstable.com/${urlCanonical}">
                  <link rel="stylesheet" href="${path}${css}" type="text/css" media="screen">
                  ${ga('UA-127809400-1')}
              </head>
              <body>
                  ${header(path)}
                  <div class="episodes">
                  <h2 id="heading" class="container">${heading}</h2>
                  ${pageContent}
                  </div>
                  ${footer(path)}
                  ${js}
              </body>
          </html>`;
};