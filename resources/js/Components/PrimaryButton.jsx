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
    variant = "primary",
    processing,
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
