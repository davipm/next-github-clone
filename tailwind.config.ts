import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#7d8590',
        secondary: '#ffa28b',
        'dark-black': '#0d1117',
        'dark-blue': '#30363d',
        'light-blue': '#161b22',
        'medium-blue': '#040d21',
      },
      boxShadow: {
        card: '0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02)',
      },
      backgroundImage: {
        increase:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(88, 133, 91, 0.9) 25.52%, #4ead56 53.12%, rgba(99, 199, 107, 0.544444) 74.48%, rgba(0, 0, 0, 0) 100%)",
        "increase-1": "linear-gradient(#0d1117, #ea6045, #ea6045, #0d1117)",
        "increase-2": "linear-gradient(#0d1117, #797ef9, #797ef9, #0d1117)",
        "line-gradient": "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-patter": "url('/hero-bg.webp')",
        "code-space": "url('/bg-stars-1.webp')",
        "footer-galaxy": "url('/footer-galaxy.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
