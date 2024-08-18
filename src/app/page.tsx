import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center items-center flex-col h-screen bg-deep-olive">
      <h1 className="text-light-olive text-3xl md:text-4xl lg:text-6xl text-center">World's biggest ecommerce site</h1>
      <div className="text-center mt-4">
        <Link 
        href='/login' 
        className="bg-light-olive hover:bg-light-green text-white font-bold py-2 px-4 rounded mr-2"
        >
              Login
        </Link>
        <Link 
        href='/signup'
        className="ml-2 bg-light-olive hover:bg-light-green text-white font-bold py-2 px-4 rounded"
        >
        Signup
        </Link>
      </div>
    </section>
  );
}
