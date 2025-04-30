"use client";

import { useState } from "react";
import { updateEmail, updatePassword } from "@/services/account/endpoints";

const SecuritySettingPage = () => {
  // Email update state
  const [currentEmail] = useState("user@example.com");
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Password update state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleUpdateEmail = async () => {
    // Reset error
    setEmailError("");

    // Validate inputs
    if (!newEmail) {
      setEmailError("New email is required");
      return;
    }

    if (!emailPassword) {
      setEmailError("Password is required to confirm email change");
      return;
    }

    try {
      setEmailLoading(true);
      await updateEmail(newEmail, emailPassword);
      // Optional: add success notification
      setNewEmail("");
      setEmailPassword("");
    } catch (error) {
      console.error("Failed to update email:", error);
      setEmailError(
        "Failed to update email. Please check your password and try again."
      );
    } finally {
      setEmailLoading(false);
    }
  };

  const handleUpdatePassword = async () => {
    // Reset error
    setPasswordError("");

    // Validate inputs
    if (!currentPassword) {
      setPasswordError("Current password is required");
      return;
    }

    if (!newPassword) {
      setPasswordError("New password is required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    try {
      setPasswordLoading(true);
      await updatePassword(currentPassword, newPassword);
      // Optional: add success notification
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Failed to update password:", error);
      setPasswordError(
        "Failed to update password. Please check your current password and try again."
      );
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div>
      {/* Email Update Section */}
      <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-1">Update Email Address</h2>
        <p className="text-gray-400 mb-6">
          Change the email address associated with your account
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Current Email</label>
            <div className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white">
              {currentEmail}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              New Email Address
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="Enter new email address"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={emailPassword}
              onChange={(e) => setEmailPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="Enter your password to confirm"
            />
          </div>

          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <button
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleUpdateEmail}
          disabled={emailLoading}
        >
          {emailLoading ? "Updating..." : "Update Email"}
        </button>
      </div>

      {/* Password Change Section */}
      <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-1">Change Password</h2>
        <p className="text-gray-400 mb-6">
          Update your password to keep your account secure
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>

          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <button
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleUpdatePassword}
          disabled={passwordLoading}
        >
          {passwordLoading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
};
export default SecuritySettingPage;
