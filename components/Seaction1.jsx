import Link from "next/link";
import Image from "next/image";
import w1 from "@/images/w1.png";
import w2 from "@/images/w2.png";

const HomeSection1 = () => {
  return (
    <section className="w-full h-[70vh] md:h-[92vh] relative overflow-hidden">
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src={w1}
          alt="Wallet Design"
          className="w-full h-full object-cover opacity-40"
          fill
          priority
        />
      </div>

      {/* Desktop Left Wallet */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[400px] opacity-70 hover:opacity-100 transition-opacity duration-300 animate-slide-in-left">
        <Image
          src={w1}
          alt="Wallet Design"
          className="w-full h-auto object-contain"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* Center Content */}
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center relative z-10 px-4 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#333333] mb-4 md:mb-6">
          The Royal Signature <br className="hidden md:block" /> Of Luxury
        </h1>

        <p className="text-[#333333] text-sm sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-4 md:mx-0">
          Discover our premium collection of handcrafted wallets, blending
          timeless elegance with modern functionality.
        </p>

        <Link href="/products">
          <button className="bg-white text-[#333333] px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm md:text-base shadow-lg">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Desktop Right Wallet */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[400px] opacity-70 hover:opacity-100 transition-opacity duration-300 animate-slide-in-right">
        <Image
          src={w2}
          alt="Wallet Design"
          className="w-full h-auto object-contain"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 0.7; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 0.7; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s forwards; }

        @media (max-width: 768px) {
          section { height: 70vh !important; }
        }
      `}</style> */}
    </section>
  );
};

export default HomeSection1;