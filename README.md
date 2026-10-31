# 📸 Celebrare – Photo Gallery

A responsive Photo Gallery Web Application built using **React, Vite, and Tailwind CSS** as part of the Celebrare Frontend React Internship Pre-Screening Assignment.

The application fetches photos from the Picsum Photos API and allows users to explore images, search by author name, and manage their favourite photos with persistent storage.

---

## ✨ Features

- **Photo Fetching:** Fetches 30 photos from the Picsum Photos API on application load.
- **Responsive Gallery:** Displays photos in a responsive grid layout.
- **Author Information:** Displays the author's name below each photo.
- **Real-Time Search:** Search and filter photos by author name without making additional API requests.
- **Favourite Management:** Add or remove photos from favourites using an interactive heart button.
- **Persistent Favourites:** Saves favourite photo IDs in browser localStorage so they remain available after page refreshes.
- **Loading State:** Displays a loading spinner while photos are being fetched.
- **Error Handling:** Displays an error message if the API request fails.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive design |
| Picsum Photos API | Fetching photo data |
| localStorage | Persisting favourite photo IDs |
| ESLint | Code quality and linting |

### React Hooks Used

| Hook | Usage |
|---|---|
| `useState` | Managing search input and photo-related state |
| `useEffect` | Fetching photos and synchronizing favourites with localStorage |
| `useReducer` | Managing favourite photo state |
| `useCallback` | Memoizing the search handler function |
| `useMemo` | Memoizing the filtered photo list |

---

## 📂 Project Structure

```text
celebrare-photo-gallery/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── PhotoCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   │
│   ├── reducers/
│   │   └── favouriteReducer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/sarikamehra5390/celebrare-photo-gallery.git
```

### 2. Navigate to the Project Directory

```bash
cd celebrare-photo-gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

---

## 🌐 API Integration

The application uses the free Picsum Photos API to fetch photo data.

**API Endpoint:**

```text
https://picsum.photos/v2/list?limit=30
```

The API returns an array of photo objects containing information such as:

- `id` – Unique identifier of the photo.
- `author` – Name of the photographer.
- `width` – Original image width.
- `height` – Original image height.
- `url` – Original photo information URL.
- `download_url` – Image URL used to display the photo.

The application uses the Fetch API with async/await to retrieve photo data.

---

## ⚙️ Implementation Details

### 1. Custom Hook – useFetchPhotos

The `useFetchPhotos` custom hook handles all photo-fetching operations separately from the UI.

It returns three values:

- `photos` – Stores the fetched photo data.
- `loading` – Indicates whether the API request is in progress.
- `error` – Stores the error message if the request fails.

This approach separates data-fetching logic from presentation components and improves code organization.

### 2. Search Functionality

The search functionality filters the already-fetched photos based on the author's name.

- Uses JavaScript's `filter()` method.
- Supports case-insensitive searching.
- Updates results in real time.
- Does not make additional API requests while searching.

### 3. Favourite Management – useReducer

The `useReducer` hook manages the application's favourite photo IDs.

The reducer handles the following action:

- `TOGGLE_FAVOURITE` – Adds a photo to favourites if it is not already present, or removes it if it is already a favourite.

This keeps favourite state transitions organized and predictable.

### 4. localStorage Persistence

Favourite photo IDs are stored in browser localStorage.

- `localStorage.getItem()` retrieves previously saved favourites.
- `localStorage.setItem()` saves updated favourites.
- `JSON.parse()` converts stored JSON strings into JavaScript data.
- `JSON.stringify()` converts the favourites array into a string for storage.

This allows favourite selections to persist across page refreshes.

### 5. Performance Optimization

**useCallback**

Used to memoize the search handler function and preserve its reference between renders when dependencies remain unchanged.

**useMemo**

Used to memoize the filtered photo list and recalculate it when the photos array or search term changes.

---

## 📱 Responsive Design

The photo gallery adapts to different screen sizes using Tailwind CSS responsive utility classes.

| Screen Size | Grid Layout |
|---|---|
| Mobile | 1 Column |
| Tablet | 2 Columns |
| Desktop | 4 Columns |

The application uses Tailwind CSS breakpoints to provide a responsive viewing experience.

---

## 🧪 Error and Loading Handling

The application handles different API request states:

- **Loading:** Displays a spinner while photos are being fetched.
- **Success:** Displays the fetched photos in the gallery.
- **Error:** Displays an appropriate error message if the request fails.

---

## 🎯 Learning Outcomes

Through this project, I practiced and strengthened my understanding of:

- React functional components.
- Component-based architecture.
- Props and state management.
- React Hooks and their practical applications.
- API integration using Fetch API.
- Asynchronous JavaScript using async/await.
- Custom React Hooks.
- State management using useReducer.
- Browser localStorage and data persistence.
- Performance optimization using useCallback and useMemo.
- Responsive UI development using Tailwind CSS.

---

## 👩‍💻 Author

**Sarika Mehra**

Frontend React Internship – Pre-Screening Assignment

---

## 📄 Assignment

This project was developed as part of the **Celebrare Frontend React Internship Pre-Screening Assignment**.

