/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui')
module.exports = {
    content: [
        "./index.html", // don't forget to add other files and directories
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
}