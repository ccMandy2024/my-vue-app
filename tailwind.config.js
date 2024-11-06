const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7635",    // 更新主色
        },
        secondary: {
          DEFAULT: "#FDAA7D",    // 更新次要色
        },
        danger: {
          DEFAULT: "#FD4D4F",    // 危險色
        },
        success: {
          DEFAULT: "#00970F",    // 成功色
        },
        background: "#f7f7f7",   // 背景色
        "text-primary": "#4D4D4D", // 主要文字色
        "text-secondary": "#BFBFBF", // 次要文字色
        "content-bg": "#FFF8F5", // 內容背景色
        "bg-primary": "#FFFFFF", // 主要背景色
        "bg-secondary": "#EEEEEE", 
        muted: "#4d4d4d"
      },
      spacing: {
        "1": "10px",
        "2": "12px",
        "3": "14px",
        "4": "15px",
        "5": "16px",
        "6": "18px",
        "7": "20px",
        "8": "22px",
        "9": "24px",
        "10": "26px",
        "11": "28px",
        "12": "30px",
        "13": "32px",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
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
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}
