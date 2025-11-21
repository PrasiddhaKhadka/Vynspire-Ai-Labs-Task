function CustomTextField({ label, placeholder = "", type = "text" }) {
    return (
        <div className="mb-4">
            {label && (
                <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>
    );
}

export default CustomTextField;