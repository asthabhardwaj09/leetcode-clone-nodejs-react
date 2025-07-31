import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub, FaLock } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { email, password };
    localStorage.setItem("leetcode_user", JSON.stringify(user));
    setMessage("Signup successful!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Sign up</h2>
          <p className="text-sm text-gray-500 mt-1">
            Join us and get access to exclusive features!
          </p>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Sign in
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

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-4">
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

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          {message && (
            <p className="text-center text-green-600 font-semibold">{message}</p>
          )}
        </form>

        <p className="text-sm text-center text-gray-500 mt-4 hover:underline cursor-pointer">
          Forgot your password?
        </p>
      </div>
    </div>
  );
};

export default Signup;
