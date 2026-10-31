
export function favouriteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const photoId = action.payload;

      const isFavourite = state.includes(photoId);

      if (isFavourite) {
        return state.filter((id) => id !== photoId);
      }

      return [...state, photoId];
    }

    default:
      return state;
  }
}
