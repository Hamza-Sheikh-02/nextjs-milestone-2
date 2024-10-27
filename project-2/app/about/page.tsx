import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600">
          I&apos;m a passionate developer with 1 year of experience in building web
          applications.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
