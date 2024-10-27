import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
      </main>
      <Footer />
    </div>
  );
}