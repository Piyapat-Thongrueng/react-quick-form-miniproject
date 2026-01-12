import { isValidEmail } from "../utils/validateEmail";
import CompletedForm from "./CompletedForm";
import MovieList from "./MovieList";
import { useState } from "react";

const SurveyForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputRadio, setInputRadio] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    selectedMovie: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let hasError = false;

    let newErrorMessage = {
      name: "",
      email: "",
      selectedMovie: "",
    };

    if (!inputName) {
      hasError = true;
      newErrorMessage.name = "โปรดใส่ชื่อของคุณ";
    }

    if (!inputEmail) {
      hasError = true;
      newErrorMessage.email = "โปรดใส่อีเมลของคุณ";
    } else if (!isValidEmail(inputEmail)) {
      hasError = true;
      newErrorMessage.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!inputRadio) {
      hasError = true;
      newErrorMessage.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
    }

    setErrorMsg(newErrorMessage);

    if (!hasError) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setInputName("");
    setInputEmail("");
    setInputRadio("");
    setInputComment("");
    setSubmitted(false);
    setErrorMsg({
      name: "",
      email: "",
      selectedMovie: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-100 to-slate-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-b-md shadow-lg overflow-hidden">
        {/* Header */}
        <nav className="bg-linear-to-r from-purple-700 to-indigo-600 p-6">
          <h1 className="text-white text-2xl font-semibold flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            Movie Survey
          </h1>
        </nav>
        {!submitted ? (
          /* Form Content */
          <form className="p-6 space-y-6" onSubmit={handleSubmit} noValidate>
            {/* ชื่อ Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="กรุณากรอกชื่อของคุณ"
                className={`w-full px-3 py-2 border text-sm ${
                  errorMsg.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
              />
              {errorMsg && (
                <div className="mt-3 text-sm">
                  <p className="text-red-500">{errorMsg.name}</p>
                </div>
              )}
            </div>

            {/* อีเมล Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                อีเมล <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className={`w-full px-3 py-2 border text-sm ${
                  errorMsg.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-black focus:border-transparent`}
                onChange={(e) => setInputEmail(e.target.value)}
                value={inputEmail}
              />
              {errorMsg && (
                <div className="mt-3 text-sm">
                  <p className="text-red-500">{errorMsg.email}</p>
                </div>
              )}
            </div>

            {/* เลือกหนังที่ชอบสุด Field */}
            <MovieList
              inputRadio={inputRadio}
              setInputRadio={setInputRadio}
              errorMsg={errorMsg.selectedMovie}
            />

            {/* ความคิดเห็นเพิ่มเติม Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ความคิดเห็นเพิ่มเติมของคุณ
              </label>
              <textarea
                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4 justify-between">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                onClick={handleReset}
              >
                ↻ รีเซ็ต
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-linear-to-r from-purple-700 to-indigo-600 text-white rounded-md cursor-pointer font-medium flex-0.1 text-sm"
              >
                ➤ ส่งแบบสำรวจ
              </button>
            </div>
          </form>
        ) : (
          <CompletedForm
            name={inputName}
            email={inputEmail}
            movie={inputRadio}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
