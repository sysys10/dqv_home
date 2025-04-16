type TeamMemberProps = {
  name: string;
  title: string;
  description: string[];
};

export default function TeamMember({
  name,
  title,
  description,
}: TeamMemberProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
        <svg
          className="w-12 h-12 text-indigo-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-700 font-medium">{title}</p>
        {description.map((line, index) => (
          <p key={index} className="text-gray-600 text-sm mt-1">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
