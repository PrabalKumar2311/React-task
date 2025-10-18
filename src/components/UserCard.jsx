import { Link } from "react-router-dom";
import { Mail, Building2, User } from "lucide-react";
import Loader from "./Loader";

export default function UserCard({ user, loading }) {
  if (loading) return <Loader message="Loading user..." />;

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
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
