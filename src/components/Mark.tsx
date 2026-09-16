export function Mark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M4 14c4-1 6.5-5.5 8-9 1.5 3.5 4 8 8 9-3.2 1.2-5.6 3.8-8 8-2.4-4.2-4.8-6.8-8-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
