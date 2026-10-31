
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-purple-700 text-white py-6 px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">
            Photo Gallery
          </h1>

          <p className="text-purple-100 mt-2">
            Explore beautiful photographs from around the world.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Gallery />
      </main>

    </div>
  );
}

export default App;
