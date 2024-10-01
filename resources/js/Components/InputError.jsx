export default function InputError({ message, className = "", ...props }) {
    return message ? (
        // <div className="my-4 px-4 py-2 border-red-500 border-2 rounded-md">
        <p {...props} className={"text-sm text-red-600 " + className}>
            {message}
        </p>
    ) : // </div>
    null;
}
