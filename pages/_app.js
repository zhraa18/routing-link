import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center w-full text-center p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
