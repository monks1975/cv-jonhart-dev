// ~/eleventy.config.js

import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import pluginIcons from 'eleventy-plugin-icons';
import yaml from 'js-yaml';

export default function (eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/assets');

  // Copy normalize.css from node_modules
  eleventyConfig.addPassthroughCopy({
    'node_modules/normalize.css/normalize.css': 'css/normalize.css',
  });

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(pluginIcons, {
    sources: [{ name: 'lucide', path: 'node_modules/lucide-static/icons' }],
    mode: 'inline',
  });

  // Add Eleventy Image Transform Plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ['webp', 'jpeg'],

    // output image widths
    widths: ['auto'],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
      pictureAttributes: {},
    },
  });

  // Configure directories
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
