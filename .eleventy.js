module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require('markdown-it-attrs');

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  const iframeHandler = (src, title) => {
    return `<div style="aspect-ratio:16/9"><iframe width="100%" height="100%" src="${src}" title="${title}"></iframe></div>`;
  }

  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addShortcode('iframe', iframeHandler);
};
