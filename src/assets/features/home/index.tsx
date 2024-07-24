import { Movie, ResponseMovie } from "../movie/type";
import { useEffect, useState } from "react";

import MovieCard from "../movie/moviecard";
import { getNowPlaying } from "../movie/api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [loading, setLoading] = useState<boolean>(true);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      setLoading(true);

      const response = await getNowPlaying(page as string);

      setTimeout(() => {
        setNowPlayingData(response);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const toDetailMovie = (id: number) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="flex flex-col p-5 bg-gradient-to-b from-gray-600 to-black">
      <div className="flex flex-col p-5">
        <label className="text-2xl font-semibold mb-5 text-white">
          NOW PLAYING
        </label>
        {!loading ? (
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            {nowPlayingData?.results.map((item: Movie) => (
              <MovieCard
                key={item.id}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                size="w-40"
                className="text-white"
                handleNavigate={() => toDetailMovie(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
            <div className="text-white">Loading.....</div>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-between mt-5">
        <button
          onClick={() => navigate(`?page=${Number(page) - 1}`)}
          className="bg-red-500 p-2 rounded-sm"
        >
          Back
        </button>
        <button onClick={handlePage} className="bg-green-500 p-2 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
