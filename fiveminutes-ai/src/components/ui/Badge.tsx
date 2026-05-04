interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-[#18181b] border border-[#27272a] text-[#a1a1aa] text-xs rounded-full px-3 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
