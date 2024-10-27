import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to My Multipage Website</h1>
        <p>This is the homepage.</p>
      </main>
      <Footer />
    </div>
  );
}
