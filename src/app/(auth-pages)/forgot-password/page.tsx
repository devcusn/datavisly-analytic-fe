"use client";

import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle password reset logic here
    setIsSubmitting(false);
  };

  return (
    <main className="flex-grow flex items-center justify-center p-24">
      <div className="w-full max-w-xl p-8 rounded-lg bg-gray-800/50">
        <h1 className="text-2xl font-bold mb-4">Reset your password</h1>
        <span>Enter your email so we can send a password reset link</span>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="text-sm text-gray-400 mb-2">Min 12 characters</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="user@exmaple.com"
              minLength={12}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || email.length === 0}
            className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 py-3 rounded flex items-center justify-center gap-2"
          >
            Send reset link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
