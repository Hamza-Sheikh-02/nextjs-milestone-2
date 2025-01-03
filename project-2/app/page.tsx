import Image from "next/image";
import pic1 from "@/public/pic1.jpeg";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi, it&apos;s me
              <br className="hidden lg:inline-block" />
              <span className="text-orange-500">Hamza Sheikh</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Highly motivated and eager to leverage my proficiency in
              TypeScript, Python, React, and Tailwind CSS to contribute to web
              development projects. Continuously expanding my knowledge base by
              currently learning Next.js, a framework for building performant
              React applications.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">
                Download Resume
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href="about">Learn More...</Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              width={720}
              height={600}
              alt="hero"
              src={pic1}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
