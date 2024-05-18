import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

function StickyToTopButton() {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="fixed bottom-10 right-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 z-30 cursor-pointer flex items-center justify-center scale-75 md:scale-100"
    >
      <FaArrowUp />
    </Link>
  );
}

export default StickyToTopButton;
