import { useNavigate } from "react-router-dom";

function Header({ preniumref, exploreref, productref, developerref, playgroundref }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClasses =
    "relative inline-block text-white transition duration-300 ease-in-out hover:text-teal-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

  const premiumLinkClasses =
    "relative inline-block text-yellow-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

  return (
    <div className="min-h-screen bg-[#0d1117] overflow-hidden">

      {/* Navbar */}
      <nav className="bg-[#0d1117] backdrop-blur-sm bg-opacity-80 sticky top-0 z-50 mb-10 mt-6">
        <div className="max-w-7xl mx-auto pr-20 py-4 flex items-center justify-end gap-10 text-md font-extralight">

          <a onClick={() => handleScroll(preniumref)} className={premiumLinkClasses}>
            Premium
          </a>
          <a onClick={() => handleScroll(exploreref)} className={linkClasses}>
            Explore
          </a>
          <a onClick={() => handleScroll(productref)} className={linkClasses}>
            Product
          </a>
          <a onClick={() => handleScroll(developerref)} className={linkClasses}>
            Developer
          </a>

          {/* Playground with tooltip */}
          <div className="relative group">
            <a
              onClick={() => {
                if (token) {
                  handleScroll(playgroundref);
                } else {
                  navigate("/login");
                }
              }}
              className={linkClasses}
            >
              Playground
            </a>

            {!token && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max px-4 py-2 text-xs text-white bg-[#2d2d2d] border border-black shadow-lg group-hover:opacity-100 opacity-0 transition-opacity duration-200 z-50 rounded-lg">
                You need to log in / sign up to Run
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-10">
        {/* Image Section */}
        <div className="w-1/2 flex justify-start">
          <div className="rounded-lg overflow-hidden ml-10 mb-6">
            <img
              src="https://yellowcherry.uk/wp-content/uploads/2022/05/website-design-animation-scene-2023-11-27-05-26-42-utc1.gif"
              alt="Coding Background"
              className="h-[260px] w-[460px] object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-1/2 px-4 text-center font-sans transform transition"
          style={{
            transform: "perspective(600px) translateZ(25px) scale(1.1)",
          }}
        >
          <h1 className="text-3xl font-bold text-white mb-8">
            A New Way to Learn
          </h1>
          <p className="text-gray-300 mb-2 text-sm font-normal">
            LeetCode is the best platform to help you enhance your skills, expand
          </p>
          <p className="text-gray-300 mb-6 text-sm font-light">
            your knowledge and prepare for technical interviews.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Create Account →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
