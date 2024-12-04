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
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
            50: "hsl(var(--primary-50))",
            100: "hsl(var(--primary-100))",
            200: "hsl(var(--primary-200))",
            300: "hsl(var(--primary-300))",
            400: "hsl(var(--primary-400))",
            500: "hsl(var(--primary-500))",
            600: "hsl(var(--primary-600))",
            700: "hsl(var(--primary-700))",
            800: "hsl(var(--primary-800))",
            900: "hsl(var(--primary-900))",
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
        typography: {
          DEFAULT: {
            css: {
              maxWidth: '65ch',
              color: 'hsl(var(--foreground))',
              a: {
                color: 'hsl(var(--primary))',
                '&:hover': {
                  color: 'hsl(var(--primary-600))',
                },
                textDecoration: 'none',
              },
              h1: {
                color: 'hsl(var(--foreground))',
                fontWeight: '700',
              },
              h2: {
                color: 'hsl(var(--foreground))',
                fontWeight: '600',
              },
              h3: {
                color: 'hsl(var(--foreground))',
                fontWeight: '600',
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
              code: {
                color: 'hsl(var(--primary-600))',
                backgroundColor: 'hsl(var(--muted))',
                padding: '0.25rem 0.4rem',
                borderRadius: '0.25rem',
                fontWeight: '400',
              },
              pre: {
                backgroundColor: 'hsl(var(--card))',
                borderRadius: '0.5rem',
                padding: '1rem',
                code: {
                  backgroundColor: 'transparent',
                  padding: '0',
                  color: 'inherit',
                },
              },
              blockquote: {
                borderLeftColor: 'hsl(var(--primary-200))',
                color: 'hsl(var(--muted-foreground))',
              },
            },
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
          "fade-in": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "fade-in": "fade-in 0.5s ease-out",
        },
        spacing: {
          '18': '4.5rem',
          '112': '28rem',
          '128': '32rem',
          '144': '36rem',
        },
        fontSize: {
          '2xs': '0.625rem',
        },
        lineHeight: {
          'extra-tight': '1.125',
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  }