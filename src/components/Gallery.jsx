
import { useState, useCallback, useMemo, useReducer, useEffect } from "react";

import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import { favouriteReducer } from "../reducers/favouriteReducer.js";

// Get saved favourites when the application initializes
function getInitialFavourites() {
  try {
    const savedFavourites = localStorage.getItem("favourites");

    if (!savedFavourites) {
      return [];
    }

    const parsedFavourites = JSON.parse(savedFavourites);

    return Array.isArray(parsedFavourites)
      ? parsedFavourites
      : [];
  } catch (error) {
    console.error("Failed to load favourites:", error);
    return [];
  }
}

function Gallery() {
  // Fetch photos
  const { photos, loading, error } = useFetchPhotos();

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Favourite state managed by useReducer
  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    undefined,
    getInitialFavourites
  );

  // Save favourites whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
      );
    } catch (error) {
      console.error("Failed to save favourites:", error);
    }
  }, [favourites]);

  // Search handler
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // Filter photos
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
    );
  }, [photos, searchTerm]);

  // Toggle favourite
  const handleToggleFavourite = (photoId) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photoId,
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-64">
        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>

        <p className="mt-4 text-gray-600">
          Loading photos...
        </p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 font-semibold">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Search */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* Photo Grid */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}

        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-semibold text-gray-700">
            No photos found
          </p>

          <p className="text-gray-500 mt-2">
            Try searching with another author name.
          </p>
        </div>
      )}
    </div>
  );
}

export default Gallery;
