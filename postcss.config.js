const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcsimport = require('postcss-easy-import');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        postcsimport(),
        tailwindcss('./tailwind.js'),
        autoprefixer({
            add: true,
            grid: true
        }),
        //Only add purgecss in production
        process.env.NODE_ENV === 'production'
            ? purgecss({
                  content: ['./src/**/*.html', './src/**/*.vue']
              })
            : ''
    ]
};
