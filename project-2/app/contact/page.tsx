import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-600">
          You can reach me via email at abc@gamil.com.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
