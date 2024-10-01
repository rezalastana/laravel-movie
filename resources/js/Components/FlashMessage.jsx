export default function FlashMessage({ className, message = "" }) {
    return (
        <div
            className={`flex bg-green-200 rounded p-4 mb-4 text-sm text-green-700 ${className}`}
        >
            {message}
        </div>
    );
}
