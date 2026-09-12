"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiLock,
  FiMail,
  FiShield,
  FiAlertCircle,
} from "react-icons/fi";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Invalid email or password"
        );
        return;
      }

      // Store login information
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Go to admin dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      setError(
        "Unable to connect to the authentication server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">

      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-xl p-8 text-slate-900">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mx-auto mb-4 shadow-md shadow-blue-600/20">
            <FiShield size={24} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Admin Portal
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your NextGen dashboard
          </p>

        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Email Address
            </label>

            <div className="relative flex items-center">

              <FiMail
                className="absolute left-3 text-slate-400"
                size={18}
              />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@example.com"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Password
            </label>

            <div className="relative flex items-center">

              <FiLock
                className="absolute left-3 text-slate-400"
                size={18}
              />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
              />

            </div>

          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">

              <FiAlertCircle
                className="shrink-0"
                size={16}
              />

              <span>{error}</span>

            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >

            {loading ? (
              <span className="flex items-center justify-center gap-2">

                <svg
                  className="animate-spin h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>

                <span>Authenticating...</span>

              </span>
            ) : (
              "Sign In to Dashboard"
            )}

          </button>

        </form>

        <p className="text-center text-xs text-slate-400 mt-8">
          Protected area. Authorized administrative access only.
        </p>

      </div>

    </main>
  );
}