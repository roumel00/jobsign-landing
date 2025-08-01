import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

export default function Navbar() {
  const webappUrl = process.env.NEXT_PUBLIC_WEBAPP_URL;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size="default" />
          </Link>
          <div className="flex items-center space-x-4">
            <a href={`${webappUrl}/auth/login`} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Log In
              </Button>
            </a>
            <a href={`${webappUrl}/auth/signup`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 