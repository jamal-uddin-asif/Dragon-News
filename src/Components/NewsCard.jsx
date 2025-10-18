import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString().split("T")[0];

  return (
    <div className=" rounded-lg shadow-sm p-4 space-y-3 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="rounded-md w-full h-56 object-cover"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {details.slice(0, 200)}...
        <span className="text-orange-500 font-semibold cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
