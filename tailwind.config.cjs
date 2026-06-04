module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)'
      },
      spacing: {
        '9': '2.25rem'
      },
      borderRadius: {
        lg: 'var(--radius-lg)'
      }
    }
  },
  plugins: []
}
