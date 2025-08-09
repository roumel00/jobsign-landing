import Image from 'next/image';

export default function Logo({ 
  size = 'default', 
  className = '',
  showText = true,
  variant = 'default' // 'default', 'white', 'gradient'
}) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    default: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textClasses = {
    sm: 'text-lg',
    default: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const getTextColors = (variant) => {
    switch (variant) {
      case 'white':
        return {
          job: '#ffffff',
          sign: '#ffffff'
        };
      default:
        return {
          job: '#4181ee',
          sign: '#ff8e40'
        };
    }
  };

  const colors = getTextColors(variant);

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
      {showText && (
        <span className={`font-bold ${textClasses[size]}`}>
          <span style={{ color: colors.job }}>Job</span>
          <span style={{ color: colors.sign }}>Sign</span>
        </span>
      )}
    </div>
  );
} 