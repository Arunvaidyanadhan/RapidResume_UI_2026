const tokens = require("./src/design/tokens.json");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: tokens.color.brand,
        neutral: tokens.color.neutral,
        success: tokens.color.success,
        warning: tokens.color.warning,
        error: tokens.color.error,
        info: tokens.color.info
      },
      fontFamily: {
        sans: [tokens.font.sans],
        serif: [tokens.font.serif]
      },
      spacing: tokens.space,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadow,
      fontSize: tokens.typeScale
    }
  }
};
