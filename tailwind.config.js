module.exports = {
  mode : "jit",
  darkmode: 'class',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'lightgreen':'#373731',
        'darkgreen':'#2D2D2B',
        'smoothgreen':'#48473C',
        'smokeblack':'#1B1B1B',
        'transparent':'transparent',
      },
      fontfamily:{
        'poppins':["'Poppins'", 'sans-serif'],
      },
      spacing:{
        '150':'9.375rem',
        '300':'18.75rem',
        '350':'21.875rem',
        '400':'25rem',
        '450':'35.8rem',
        '600':'37.5rem',
        '800':'50rem',
      },
      variants:{
        extend:{
          display: ['group-focus'],
          opacity: ['group-focus'],
          inset: ['group-focus']
        },
        screens: {
          'xs':'480px',
          'sm': '640px',
          'md': '1024px',
          'lg': '1280px',
        },
      }
    },
  },
  plugins: [],
}
