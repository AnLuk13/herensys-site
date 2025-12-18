interface ArrowRightProps {
  width?: number;
  height?: number;
  className?: string;
}

function ArrowRight({ width = 16, height = 16, className }: ArrowRightProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33301 8H12.6663M12.6663 8L8.66634 4M12.6663 8L8.66634 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowRight;