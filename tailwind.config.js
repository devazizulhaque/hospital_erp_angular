/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"], // make sure to include all your files
  theme: {
    extend: {
      colors: {
        primary: '#3C50E0',
        dark: '#1C2434',
        'dark-2': '#212B36',
        'dark-3': '#64748B',
        'dark-4': '#8A99AF',
        'gray-2': '#F7F9FC',
        'gray-3': '#EFF4FB',
        'gray-4': '#E2E8F0',
        stroke: '#E5E7EB',
        meta: '#1C2434',
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'), // optional plugin
  ],
};
