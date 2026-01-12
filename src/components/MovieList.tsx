import { movies } from "../constants/movieData";

interface MovieListProps {
  inputRadio: string;
  setInputRadio: (movie: string) => void;
  errorMsg: string;
}

const MovieList = ({ inputRadio, setInputRadio, errorMsg }: MovieListProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-5">
        เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
      </label>
      <div
        className={`space-y-7 ${
          errorMsg ? "space-y-3 border border-red-500 p-5 rounded-2xl" : ""
        }`}
      >
        {movies.map((movie, index) => (
          <label
            className="flex items-start gap-3 cursor-pointer hover:bg-gray-200 p-3 rounded-2xl"
            key={index}
          >
            <input
              type="radio"
              name="movie"
              value={movie.title}
              className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500"
              checked={inputRadio === movie.title}
              onChange={(e) => setInputRadio(e.target.value)}
            />
            <div>
              <div className="font-medium text-gray-900 text-sm">
                {movie.title} ({movie.year})
              </div>
              <div className="text-sm text-gray-500">
                Director: {movie.director}
              </div>
            </div>
          </label>
        ))}
      </div>
      {errorMsg && (
        <div className="mt-3 text-sm">
          <p className="text-red-500">{errorMsg}</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;
