import React, { forwardRef, useEffect, useRef } from "react";
// proptype untuk memvalidasi props
import PropTypes from "prop-types";

// validasi props
// TextInput.propTypes = {
//     type: PropTypes.oneOf(["name", "email", "password", "number", "file"]),
//     name: PropTypes.string,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     className: PropTypes.string,
//     variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
//     autoComplete: PropTypes.string,
//     required: PropTypes.bool,
//     handleChange: PropTypes.func,
//     placeholder: PropTypes.string,
//     isError: PropTypes.bool,
// };

export default forwardRef(function TextInput(
    {
        type = "text",
        value,
        defaultValue,
        className,
        variant = "primary",
        autoComplete,
        required,
        isFocused,
        placeholder,
        isError,
        ...props
        // props berisi semua props yang diberikan ke komponen, misal name, value, onChange, dll
    },
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                defaultValue={defaultValue}
                // isError berarti jika ada inputan error, maka tambahkan class input-error pada input.css
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                required={required}
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
        </div>
    );
});
