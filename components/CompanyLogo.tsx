"use client";

interface CompanyLogoProps {
  company: string;
  size?: "sm" | "md" | "lg";
}

const CompanyLogo = ({ company, size = "md" }: CompanyLogoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  // Map company names to image filenames
  const companyImages: Record<string, string> = {
    "Commonwealth Bank": "cba.jpeg",
    "Wesfarmers OneDigital": "onedigital.jpeg",
    "ANZ": "anz.jpeg",
    "NAB": "NAB.jpeg",
  };

  // Fallback colors for companies without images
  const companyColors: Record<string, { bg: string; text: string; name: string }> = {
    "AIA Australia": {
      bg: "bg-red-700",
      text: "text-white",
      name: "AIA"
    },
    "Wells Fargo": {
      bg: "bg-yellow-500",
      text: "text-red-700",
      name: "WF"
    },
    "Deloitte": {
      bg: "bg-green-600",
      text: "text-white",
      name: "DTT"
    },
    "UnitedHealth Group": {
      bg: "bg-blue-600",
      text: "text-white",
      name: "UHG"
    },
    "Oracle Corporation": {
      bg: "bg-red-600",
      text: "text-white",
      name: "ORC"
    },
  };

  const imagePath = companyImages[company];

  if (imagePath) {
    // Render image logo
    return (
      <div
        className={`${sizeClasses[size]} rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-lg border border-gray-200`}
        title={company}
      >
        <img
          src={`/images/companies/${imagePath}`}
          alt={company}
          className="w-full h-full object-contain p-1"
        />
      </div>
    );
  }

  // Fallback to colored badge
  const config = companyColors[company] || {
    bg: "bg-gray-700",
    text: "text-white",
    name: company.substring(0, 3).toUpperCase()
  };

  return (
    <div
      className={`${sizeClasses[size]} ${config.bg} ${config.text} rounded-lg flex items-center justify-center font-bold shadow-lg text-xs`}
      title={company}
    >
      {config.name}
    </div>
  );
};

export default CompanyLogo;
