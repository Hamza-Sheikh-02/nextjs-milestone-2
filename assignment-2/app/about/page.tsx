import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </main>
      <Footer />
    </div>
  );
}
