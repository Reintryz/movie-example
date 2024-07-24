interface Props {
  name: string;
  poster_path: string;
  first_air_date: string;
  size?: string;
  className?: string;
}

const TvCard = (props: Props) => {
  const { name, poster_path, first_air_date, size, className } = props;

  return (
    <div className={`flex flex-col ${size}`}>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      <label className={`font-semibold ${className}`}>{name}</label>
      <p className={className}>{first_air_date}</p>
    </div>
  );
};

export default TvCard;
