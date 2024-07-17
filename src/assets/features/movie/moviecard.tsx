import React from "react";

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
  className?: string;
  handleNavigate?: () => void;
}

const MovieCard = (props: Props) => {
  const { title, poster_path, release_date, size, className, handleNavigate } =
    props;

  return (
    <div
      className={`flex flex-col ${size}`}
      cursor-pointer
      onClick={handleNavigate}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        loading="lazy"
      />
      <label className={`font-semibold ${className}`}>{title}</label>
      <p className={className}>{release_date}</p>
    </div>
  );
};

export default MovieCard;
