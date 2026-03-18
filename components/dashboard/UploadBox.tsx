export default function UploadBox() {
    return (
        <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center text-gray-600 hover:border-green-500 transition cursor-pointer">
            <p className="mb-2">Drag & drop your dataset here</p>
            <p className="text-blue-500">or click to browse</p>
        </div>
    )
}