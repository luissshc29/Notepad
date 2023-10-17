/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            screens: {
                'sm': '320px',
                // => @media (min-width: 320px) { ... }
          
                'md': '640px',
                // => @media (min-width: 640px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
          
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            gridTemplateColumns: {
                '55-45': '55% 45%',
                '45-55': '45% 55%',
                '85-15': '85% 15%'
            },
            keyFrames: {
                'show-up': {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1}
                }
            },
            boxShadow: {
                inner: 'inset 2px 2px 4px 0 rgb(0 0 0 / 0.05), inset -2px -2px 4px 0 rgb(0 0 0 / 0.05)',
                outer: '4px 4px 8px 0 rgb(0 0 0 / 1)'
            },
            colors: {
                'gray-card': '#121212',
                'gray-card-lighter': '#181818',
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down .3s ease-out",
                "accordion-up": "accordion-up .3s ease-out",
                'show-up': 'show-up .3s ease-in-out '
            },
            fontFamily: {
                banner: 'var(--fonte-banner)'
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}