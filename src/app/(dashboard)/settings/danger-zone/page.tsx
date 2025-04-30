"use client";
import { deleteAccount } from "@/services/account/endpoints";
import { logout } from "@/services/auth/endpoints";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DangerZoreSettingPage = () => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const deleteAccountHandler = async () => {
    await deleteAccount();
    await logout();
    router.push("/");
  };

  return (
    <>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="text-red-600 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-medium text-red-800">Danger Zone</h2>
            <p className="mt-1 text-red-700">
              Destructive actions below can result in irrecoverable data loss.
              Be careful.
            </p>
          </div>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6 mb-6 relative">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">
              Delete Account
            </h2>
            <p className="text-gray-400">
              Deleting your account removes all sites and stats you have
              collected
            </p>
          </div>
          <div className="text-indigo-400 border border-indigo-400 rounded-full w-6 h-6 flex items-center justify-center">
            i
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {!deleteModal ? (
          <button
            onClick={() => setDeleteModal(true)}
            className="cursor-pointer border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition-colors"
          >
            Delete my account
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-white">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={deleteAccountHandler}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Yes, delete my account
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DangerZoreSettingPage;
