const SecuritySettingPage = () => {
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
              user@example.com
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              New Email Address
            </label>
            <input
              type="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="Enter new email address"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="Enter your password to confirm"
            />
          </div>
        </div>

        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition">
          Update Email
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
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">New Password</label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            />
          </div>
        </div>

        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition">
          Update Password
        </button>
      </div>
    </div>
  );
};
export default SecuritySettingPage;
