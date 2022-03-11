module.exports = {
    content: ['./src/**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(140px, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(140px, 1fr))',
            },
            gridTemplateRows: {
                'auto-fit': 'repeat(auto-fit, minmax(140px, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(140px, 1fr))',
            },
        },
    },
    plugins: [],
}
