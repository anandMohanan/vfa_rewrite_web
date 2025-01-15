import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                     css: {
                        'h2': {
                            marginTop: '2em',
                            marginBottom: '1em',
                            fontSize: '1.875rem',
                            fontWeight: '700',
                            lineHeight: '1.3',
                        },
                        'h3': {
                            marginTop: '1.5em',
                            marginBottom: '0.75em',
                        },
                        'p': {
                            marginTop: '1.25em',
                            marginBottom: '1.25em',
                            fontSize: '1.125rem',
                            lineHeight: '1.75',
                            color: 'rgb(55 65 81)',
                        },
                        'pre': {
                            marginTop: '1.5em',
                            marginBottom: '1.5em',
                            backgroundColor: 'rgb(17 24 39)',
                            color: 'rgb(229 231 235)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            overflowX: 'auto',
                        },
                        'code': {
                            backgroundColor: '#f5f5f5',
                            padding: '0.2em 0.4em',
                            borderRadius: '0.25em',
                            fontSize: '0.875em',
                        },
                        'ul': {
                            marginTop: '1.25em',
                            marginBottom: '1.25em',
                        },
                        'ol': {
                            marginTop: '1.25em',
                            marginBottom: '1.25em',
                        },
                        'li': {
                            marginTop: '0.5em',
                            marginBottom: '0.5em',
                        }
                    }

                }

            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate")
    ],
} satisfies Config;
