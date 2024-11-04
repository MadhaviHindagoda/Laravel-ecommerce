import React from 'react';

export default function TButton({
    type = "button",
    children,
    onClick,
    className = "",
    variant = "primary",
    disabled = false
}) {
    // Tailwind styles for different button variants
    const baseStyles = "px-4 py-2 rounded font-semibold transition duration-200";
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
    };

    // Combine base, variant, and custom styles
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonStyles}
            disabled={disabled}
        >
            {children}
        </button>
    );
}















// import {Link} from 'react-router-dom';

// export default function TButton({
//     color = 'indigo',
//     to = '',
//     circle = false,
//     href = '',
//     link = false,
//     target = "_blank",
//     children
// }) {

//     let classes = [
//         "flex",
//         "whitespace-nowrap",
//         "text-sm",
//         "boder",
//         "boder-2",
//         "boder-transparent",


//     ];


//   return (
//   )
// }



