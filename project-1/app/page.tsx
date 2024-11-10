import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="home">
        <h1>Hi, it&apos;s me Hamza Sheikh</h1> <br />
        <p>
          Highly motivated and eager to leverage my proficiency in TypeScript,
          Python, React, and Tailwind CSS to contribute to web development
          projects. Continuously expanding my knowledge base by currently
          learning Next.js, a framework for building performant React
          applications.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
