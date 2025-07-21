import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center overflow-hidden">

      <div className="flex items-center justify-between max-w-7xl w-full px-8">

        {/* Image Section */}
        <div className="w-1/2 flex justify-start">
          <div className="rounded-lg overflow-hidden ml-10">
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
            LeetCode is the best platform to help you enhance your skills,
            expand
          </p>
          <p className="text-gray-300 mb-6 text-sm font-light">
            your knowledge and prepare for technical interviews.
          </p>
          <button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white px-6 py-2 rounded-full font-semibold transition">
            Create Account →
          </button>
        </div>

      </div>

    </div>
  );
}

export default Header;
