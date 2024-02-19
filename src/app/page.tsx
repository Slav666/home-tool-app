import Link from "next/link";
import Button from "@/components/Button";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
      <div className="flex space-x-4">
        <Link href="/register">
          <Button type="button" size="small">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button type="button" size="small">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
