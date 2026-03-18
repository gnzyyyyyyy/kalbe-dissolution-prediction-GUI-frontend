import UploadBox from "./UploadBox";

export default function PredictionPanel() {
    return (
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-start">
            <h2 className="font-semibold mb-2">
                Upload/ <span className="text-blue-500">Choose uploaded dataset</span>
            </h2>

            <p className="text-sm text-gray-500 mb-10">
                Please make sure the file format meets the requirement.
                Only .xlsx, .xls, or .csv is allowed.
            </p>

            <UploadBox />

            <button className="mt-8 w-fit px-6 py-2 bg-green-700 hover:bg-green-600 text-white rounded-md">RUN PREDICTION MODEL</button>
        </div>
    )
}