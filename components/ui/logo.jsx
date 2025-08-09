import Image from 'next/image';

export default function Logo({ 
  size = 'default', 
  className = '',
}) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    default: 'w-24 h-15',
    lg: 'w-32 h-22',
    xl: 'w-48 h-33'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/jobsign-logo.svg"
          alt="JobSign Logo"
          width={64}
          height={64}
          className="w-full h-full"
        />
      </div>
    </div>
  );
} 