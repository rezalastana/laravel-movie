import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
};

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    // default value variant is primary
    variant = "primary",
    processing,
    //Properti lain yang tidak disebutkan secara eksplisit (seperti onClick, type, dll.) akan disimpan dalam objek props karena penggunaan {...props}.
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
