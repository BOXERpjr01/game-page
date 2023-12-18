/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      colors: {
        primary: "#00668A",
        secondary: "#004E71",
        secondwhite: "#fff",
        lightGreen: "#03cfb4",
        rgba: "rgba(0,0,0,0.5)",
        newrgba: "rgb(178 232 231 / 35%)",
        grayddd: "#ddd",
        grayf4: "#f4f4f4",
        gray4: "#444",
        Cyans: "hsl(180, 29%, 50%)",
        GrayishCyan: "hsl(180, 52%, 96%)",
        LightGrayishCyan: "hsl(180, 31%, 90%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        Tomato: " hsl(4, 100%, 67%)",
        whiteRed: "rgb(236, 224, 224)",
        Dark_late_Grey: " hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        DarkGray: "hsl(0, 0%, 63%)",
        Very_Dark_Gray: "hsl(0, 0%, 27%)",
      },
      size: {
        height: "50px",
        twopadding: "10px 20px",
        halfmargin: "20px auto",
        "5rem": "5rem",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      width: {
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 0.4fr))",
        20: "repeat(20, minmax(0, 0.11fr))",
        25: "repeat(25, minmax(0, 0.8fr))",
        30: "repeat(30, minmax(0, 0.1fr))",

        // Complex site-specific column configuration
      },
      backgroundImage: {
        "bg-header": "url('./images/bg-header-desktop.svg')",
        "bg-mogile": "url('./images/bg-header-mobile.svg')",
      },

      boxShadow: {
        "1xl": "1px 3px 5px rgba(0,0,0,0.1)",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      wideste: ".25em",
      firstwidest: "8px",
    },
    // screens: {
    //   xl3: "2570px",
    //   // => @media (min-width: 640px) { ... }

    //   xl4: "2730px",
    //   // => @media (min-width: 1024px) { ... }
    // },
    fontFamily: {
      roboto: ["Roboto, sans-serif"],
      spartan: ["League Spartan, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: "true",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      3: "3px",
      6: "6px",
      7: "7px",
    },
  },
  plugins: [],
};
