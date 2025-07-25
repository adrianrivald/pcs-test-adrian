import React from "react";

type AvatarProps = {
  children: React.ReactNode;
  className?: string;
};

export function Avatar({ children, className = "" }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

type AvatarImageProps = {
  src: string;
  alt?: string;
};

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

type AvatarFallbackProps = {
  children: React.ReactNode;
};

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-medium">
      {children}
    </div>
  );
}
