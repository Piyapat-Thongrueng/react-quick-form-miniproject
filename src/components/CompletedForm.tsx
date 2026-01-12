interface CompletedFormProps {
  name: string;
  email: string;
  movie: string;
  onReset: () => void;
}

const CompletedForm = ({ name, email, movie, onReset }: CompletedFormProps) => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Success Message Box */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-green-800">
              ส่งแบบสำรวจสำเร็จ!
            </h2>
          </div>

          <div className="space-y-4 flex flex-col">
            {/* ชื่อ */}
            <div className="flex gap-22">
              <span className="text-gray-600 font-medium text-sm">ชื่อ:</span>
              <span className="text-gray-900 text-sm">{name}</span>
            </div>

            {/* อีเมล */}
            <div className="flex gap-19">
              <span className="text-gray-600 font-medium text-sm">อีเมล:</span>
              <span className="text-gray-900 text-sm">{email}</span>
            </div>

            {/* หนังที่เลือก */}
            <div className="flex gap-10">
              <span className="text-gray-600 font-medium text-sm">
                หนังที่เลือก:
              </span>
              <span className="text-purple-600 font-medium text-sm">
                {movie}
              </span>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
          onClick={onReset}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          ทำแบบสำรวจใหม่
        </button>
      </div>
    </div>
  );
};

export default CompletedForm;
