import { FC } from '@k-workspace/types';

/* eslint-disable-next-line */
export interface TagsProps extends FC {
  data: string[];
}

export function Tags({ data, className = '' }: TagsProps) {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {data?.map((tag) => (
        <button
          key={tag}
          className="text-xs font-medium text-mainText capitalize px-2 py-1.5 bg-mainTitle/25 rounded-md"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
