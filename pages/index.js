export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-4">
      {/* Gambar Profil */}
      <img 
        src="/profile.jpg" 
        alt="Profile" 
        className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg"
      />
      
      {/* Teks */}
      <h1 className="text-5xl font-bold text-yellow-400 drop-shadow-md mt-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg mt-4 max-w-xl">
        Explore my work, skills, and projects!
      </p>

      {/* Button Interaktif */}
      <button 
        className="mt-6 px-6 py-3 text-lg font-semibold bg-yellow-400 text-gray-900 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-500 active:scale-95"
      >
        View My Work
      </button>
    </div>
  );
}
