/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#bfa8ff", // Soft Lavender
                secondary: "#ff9ce6", // Pale Pink
                dark: "#0f0518", // Deep Violet
                surface: "#1a0b2e" // Dark Purple Surface
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
