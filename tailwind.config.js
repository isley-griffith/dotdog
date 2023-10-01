/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'journal-regular': "/Journal.png",
        'journal-black': "/JournalBlack.png",
        'journal-colors': "/JournalColors.png",
      },
      colors: {
        action: "#007aff",
        subtitle: "#818087",
        "gray-l": "#323232",
        "gray-d": "#282a2a"
      }
    },
  },
  plugins: [],
}
