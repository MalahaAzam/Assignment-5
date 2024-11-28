import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
<div className="flex justify-center space-x-8">
  <div className="bg-teal-600 w-72 h-72"></div>
  <div className="bg-pink-400 w-72 h-72"></div>
  <div className="bg-yellow-200 w-72 h-72"></div>
</div>
<div className="flex justify-center space-x-8 mt-8 mb-20">
  <div className="bg-blue-400 w-72 h-72"></div>
  <div className="bg-red-400 w-72 h-72"></div>
</div>
    </main>
  );
}
