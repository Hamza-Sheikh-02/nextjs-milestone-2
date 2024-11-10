import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="about">
        <h1>There is my short journey</h1>
        <br />
        <p>
          I am FSC student and a frontend developer and i am studying Generative
          AI in GIAIC.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
