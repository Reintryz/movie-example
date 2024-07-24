import { useEffect, useState } from "react";

import TvCard from "./tvcard";
import { getTvShows } from "./api-tv";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const [nowTvShows, setTvShows] = useState<ResponseTv>();
  const [loadingTvShows, setLoadingTvShows] = useState<boolean>(true);

  useEffect(() => {
    fetchTv();
  }, [page]);

  const fetchTv = async () => {
    try {
      setLoadingTvShows(true);
      const response = await getTvShows(page as string);
      setTimeout(() => {
        setTvShows(response);
        setLoadingTvShows(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  return (
    <div className="flex flex-col p-5 bg-gradient-to-b from-gray-600 to-black">
      {/* TV Shows Section */}
      <div className="flex flex-col p-5">
        <label className="text-2xl font-semibold mb-5 text-white">
          TV Shows
        </label>
        {!loadingTvShows ? (
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            {nowTvShows?.results.map((item: ResulTvShows) => (
              <TvCard
                key={item.id}
                poster_path={item.poster_path}
                name={item.name}
                first_air_date={item.first_air_date}
                size="w-40"
                className="text-white"
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
