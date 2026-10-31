# Celebrare – Photo Gallery App

A responsive Photo Gallery Web Application built using React, Vite, and Tailwind CSS as part of the Celebrare Frontend React Internship Pre-Screening Assignment.
Features
- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Shows photographer/author names.
- Real-time search by author name.
- Add and remove photos from favourites.
- Persists favourite photo IDs using browser localStorage.
- Loading spinner while fetching photos.
- Error handling for failed API requests.
Tech Stack
- React
- JavaScript
- Vite
- Tailwind CSS
- Picsum Photos API
- React Hooks: useState, useEffect, useReducer, useCallback, useMemo
- Browser localStorage
Project Structure
Celebrare – Photo




Installation and Setup
1. Clone the repository:
git clone YOUR_REPOSITORY_URL


2. Navigate into the project:
cd celebrare-photo-gallery


3. Install dependencies:
npm install


4. Start the development server:
npm run dev


5. Open the local URL provided by Vite in your browser.
API Used
Picsum Photos API:

https://picsum.photos/v2/list?limit=30
React Concepts Demonstrated
- Custom Hooks for separating API-fetching logic.
- useReducer for managing favourite photo state.
- useEffect for API fetching and localStorage synchronization.
- useCallback for memoizing the search handler.
- useMemo for memoizing filtered photo results.
- Component-based architecture and props.
Author
Sarika Mehra