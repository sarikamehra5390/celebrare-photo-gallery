
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* Photo */}
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        className="w-full h-64 object-cover"
        loading="lazy"
      />

      {/* Photo details */}
      <div className="p-4 flex items-center justify-between">

        <h3 className="text-gray-800 font-semibold">
          {photo.author}
        </h3>

        {/* Favourite button */}
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? "Remove from favourites"
              : "Add to favourites"
          }
          aria-pressed={isFavourite}
          className={`text-2xl transition-colors duration-200 ${
            isFavourite
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {isFavourite ? "♥" : "♡"}
        </button>

      </div>
    </div>
  );
}

export default PhotoCard;
