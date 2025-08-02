import React from 'react';

const Card = ({ 
  children, 
  title, 
  icon: Icon,
  gradientFrom, 
  gradientTo,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`relative p-5 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${gradientFrom.replace('50', '100')} dark:border-${gradientFrom.replace('50', '800')}/50 shadow-lg ${className}`}
      {...props}
    >
      {Icon && (
        <div className="flex items-center gap-3 pb-4">
          <div className={`p-2 ${gradientFrom.replace('50', '100')} dark:bg-${gradientFrom.replace('50', '800')} rounded-full`}>
            <Icon size={20} className={`text-${gradientFrom.replace('50', '600')} dark:text-${gradientFrom.replace('50', '300')}`} />
          </div>
          <h2 className={`font-bold text-lg bg-gradient-to-r ${gradientFrom.replace('50', '600')} ${gradientTo.replace('50', '600')} bg-clip-text text-transparent dark:from-${gradientFrom.replace('50', '300')} dark:to-${gradientTo.replace('50', '300')}`}>
            {title}
          </h2>
        </div>
      )}
      {children}
      <div className={`absolute top-0 right-0 h-full w-1 bg-gradient-to-b ${gradientFrom.replace('50', '500')} ${gradientTo.replace('50', '500')} rounded-r-lg`} />
    </div>
  );
};

export default Card;