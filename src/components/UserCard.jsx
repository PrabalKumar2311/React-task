import { Link } from "react-router-dom";
import { Mail, Building2, User } from "lucide-react";

export default function UserCard({ user }) {
  if (!user) {
    return (
      <div className="bg-gray-200 animate-pulse h-48 rounded-2xl"></div>
    );
  }

  const viewedUsers = JSON.parse(localStorage.getItem("viewedUsers")) || [];
  const isViewed = viewedUsers.includes(user.id);

  return (
    <div className="relative bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
      {isViewed && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Viewed
        </span>
      )}

      <div className="flex flex-col items-center">
        <div className="bg-gray-200 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center mb-3">
          <User size={32} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h2>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Mail size={18} className="mr-2 text-gray-600" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Building2 size={18} className="mr-2 text-gray-600" />
          <span>{user.company.name}</span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <Link
          to={`/user/${user.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
