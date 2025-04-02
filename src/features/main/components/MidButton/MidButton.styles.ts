const baseButtonStyles = {
    height: "56px",
    width: "375px",
    fontSize: "24px",
    fontWeight: "600",
    textTransform: "none",
    borderRadius: "30px",
    transition: "transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease",
    "&:disabled": {
        background: "#CCCCCC",
        color: "#666666",
        boxShadow: "none",
        transform: "none",
    },
};

const variants = {
    primary: {
        ...baseButtonStyles,
        background: "radial-gradient(circle at center, #1D1D93 0%, #1D1D93 100%)",
        color: "white",
        boxShadow: "0 0 20px rgba(58, 51, 113, 0.4)",
        "&:hover": {
            background: "radial-gradient(circle at center, #443C82 0%, #322A66 100%)",
            boxShadow: "0 0 30px rgba(58, 51, 113, 0.7)",
            transform: "scale(1.02)",
        },
    },
    secondary: {
        ...baseButtonStyles,
        background: "white",
        color: "#1D1D93",
        border: "2px solid #1D1D93",
        "&:hover": {
            background: "#f5f5f5",
            transform: "scale(1.02)",
        },
    },
    outline: {
        ...baseButtonStyles,
        background: "transparent",
        color: "#1D1D93",
        border: "1px solid #1D1D93",
        boxShadow: "none",
        "&:hover": {
            background: "rgba(29, 29, 147, 0.05)",
            transform: "scale(1.02)",
        },
    },
};

export const getButtonStyles = (variant: 'primary' | 'secondary' | 'outline') => variants[variant]; 