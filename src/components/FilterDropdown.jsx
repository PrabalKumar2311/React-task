export default function FilterDropdown({ users, company, setCompany }) {
  const companies = ["All", ...new Set(users.map((u) => u.company.name))];

  return (
    <select
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      className="w-full sm:w-48 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      {companies.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  );
}
