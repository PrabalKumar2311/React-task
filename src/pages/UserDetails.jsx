import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Building2,
  MapPin,
  User,
} from "lucide-react";
import Loader from "../components/Loader";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error fetching user.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 pt-20 relative">
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-1" size={18} />
          Back
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 text-gray-600 rounded-full w-30 h-30 flex items-center justify-center mb-3">
            <User size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-1">{user.name}</h1>
        </div>

        <div className="bg-gray-100 rounded-xl shadow-inner mt-6 p-2 divide-y divide-gray-300 text-left">
          <div className="flex items-center py-2 p-2 text-gray-700">
            <Mail size={18} className="mr-3 text-blue-500" />
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <div className="flex items-center py-2 p-2 text-gray-700">
            <Phone size={18} className="mr-3 text-green-500 mb-2 mt-2" />
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
          <div className="flex items-center py-2 p-2 text-gray-700">
            <Globe size={18} className="mr-3 text-purple-500 mb-2 mt-2" />
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
          <div className="flex items-center py-2 p-2 text-gray-700">
            <Building2 size={18} className="mr-3 text-yellow-500 mb-2 mt-2" />
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
          </div>
          <div className="flex items-center py-2 p-2 text-gray-700 mt-1">
            <MapPin size={18} className="mr-3 text-red-500" />
            <p>
              <strong>Address:</strong> {user.address.city},{" "}
              {user.address.street}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
