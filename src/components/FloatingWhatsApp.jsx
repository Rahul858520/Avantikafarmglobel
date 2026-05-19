import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/91777588949"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      title="Chat with Avantika Farm Globe"
    >
      <FaWhatsapp className="text-3xl animate-pulse" />
      <span className="absolute right-full mr-3 bg-[#4E342E] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#8BC34A]/30">
        Chat with Export Sales
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
