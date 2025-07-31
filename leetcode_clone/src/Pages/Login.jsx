import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("leetcode_user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      const fakeToken = btoa(`${email}:${password}:${Date.now()}`);
      setToken(fakeToken);
      setMessage("Login successful! 🎉");
    } else {
      setMessage("Invalid email or password");
      setToken("");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Login in</h2>
          <p className="text-sm text-gray-500 mt-1">
            Get access to more learning features
          </p>
          <p className="text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <FaGoogle className="text-xl" />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <FaFacebook className="text-xl text-blue-600" />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <FaGithub className="text-xl" />
          </button>
          <button className="border p-2 rounded-full hover:bg-gray-100">
            <FaLock className="text-xl" />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </button>

          {message && (
            <p className="text-center text-green-600 font-semibold">{message}</p>
          )}
        </form>

        {token && (
          <div className="mt-2 text-xs text-gray-500 break-all text-center">
            <strong>Fake Token:</strong> {token}
          </div>
        )}

        <p className="text-sm text-center text-gray-500 mt-4 hover:underline cursor-pointer">
          Forgot your password?
        </p>
      </div>
    </div>
  );
};

export default Login;
