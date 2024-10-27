import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="about">
        <h1>About Me</h1>
        <p>Here is a little bit about myself.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
