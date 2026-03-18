export default function ResultPanel() {
    return (
        <div className="w-full md:w-1/2 p-8 border-l flex flex-col">
            <h2 className="font-semibold mb-4">DISSOLUTION PROFILE RESULT</h2>
            <div className="h-full flex items-center justify-center text-gray-500 text-sm text-center">
                Result will be displayed here once the prediction model has been run
            </div>
        </div>
    )
}