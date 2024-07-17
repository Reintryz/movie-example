import React, { useEffect, useState } from "react";

import { DetailMovie } from "../movie/type";
import { getMovieId } from "../movie/api";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<DetailMovie>();

  useEffect(() => {
    fetchMovieById();
  }, [id]);

  const fetchMovieById = async () => {
    try {
      setLoading(true);

      const response = await getMovieId(id as string);

      setMovie(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
          <div className="text-white">Loading.....</div>
        </div>
      ) : (
        <div>{movie?.title}</div>
      )}
    </div>
  );
};

export default Details;
