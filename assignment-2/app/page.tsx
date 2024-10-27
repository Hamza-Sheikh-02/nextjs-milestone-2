import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website!</h1>
      </main>
      <Footer />
    </div>
  );
}
