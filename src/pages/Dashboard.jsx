import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { Funnel } from "lucide-react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const companies = Array.from(new Set(users.map((u) => u.company.name)));

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || user.company.name === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-medium mb-6 text-center">User Dashboard</h1>

      <div className="mb-6 flex gap-4 justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="flex-1 max-w-lg border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="relative flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 px-3 py-2 w-44 bg-grey-300">
          <Funnel className="absolute left-3 text-gray-500" size={18} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none pl-8 pr-3 w-full bg-transparent text-gray-700 focus:outline-none"
          >
            <option value="all">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <UserCard key={idx} />
            ))
          : filteredUsers.map((user) => <UserCard key={user.id} user={user} />)}

        {!loading && filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-6">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
}
