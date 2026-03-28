import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#0A2E5C',
  				foreground: '#FFFFFF'
  			},
  			accent: {
  				DEFAULT: '#00A8E8',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#F97316',
  				foreground: '#FFFFFF'
  			},
  			neutral: {
  				dark: '#1A1A2E',
  				mid: '#4A5568',
  				light: '#F8FAFC'
  			},
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			chart: {
  				"1": "hsl(var(--chart-1))",
  				"2": "hsl(var(--chart-2))",
  				"3": "hsl(var(--chart-3))",
  				"4": "hsl(var(--chart-4))",
  				"5": "hsl(var(--chart-5))"
  			}
  		},
  		fontFamily: {
  			sans: ['"Roboto Condensed"', 'var(--font-roboto-condensed)', 'sans-serif'],
  			heading: ['"Roboto Condensed"', 'var(--font-roboto-condensed)', 'sans-serif'],
  			roboto: ['"Roboto Condensed"', 'var(--font-roboto-condensed)', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	}
  },
};
export default config;
