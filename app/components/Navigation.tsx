import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="text-2xl hover:opacity-80 transition-opacity">
            🌍
          </Link>
        </div>
      </div>
    </nav>
  );
}
