const ProfileSettingPage = () => {
  return (
    <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-1">Your Name</h2>
      <p className="text-gray-400 mb-6">
        Change the name associated with your account
      </p>

      <div className="mb-4">
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          defaultValue={"halil"}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
        />
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition">
        Change Name
      </button>
    </div>
  );
};
export default ProfileSettingPage;
