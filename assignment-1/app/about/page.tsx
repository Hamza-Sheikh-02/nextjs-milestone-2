import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>This is the About page.</p>
      </main>
      <Footer />
    </div>
  );
}
