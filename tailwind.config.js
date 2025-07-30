module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bloodRed: "#850E35", // Custom Blood Red Color
                deepMaroon: "#5E0B15",
            },
            transform: {
                'preserve-3d': 'preserve-3d',
                'style-preserve-3d': 'transform-style: preserve-3d;',
            },
            rotate: {
                'y-180': 'rotateY(180deg)',
            },
        },
    },
    plugins: [],
};