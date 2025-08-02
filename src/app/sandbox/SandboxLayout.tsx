"use client";
import Link from "next/link";
type SandboxLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
};
const SandboxLayout: React.FC<SandboxLayoutProps> = ({
  title,
  description,
  children,
  buttonText = "Return To Menu Page",
  buttonLink = "/sandbox",
}) => {
  return (
    <div className="min-h-screen bg-primary-100 flex justify-center items-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-6xl">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-primary-500 mb-6 text-center">
          {title}
        </h1>
        <p className="text-xl text-gray-500 mb-8 text-center">{description}</p>
        {/* Content Section */}
        {children}
        {/* Button Section */}
        {buttonText && buttonLink && (
          <div className="mt-12 text-center">
            <Link href={buttonLink}>
              <button className="w-full py-3 px-8 text-lg font-medium rounded-xl bg-primary-500 text-white shadow-md hover:bg-primary-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-300">
                {buttonText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default SandboxLayout;
