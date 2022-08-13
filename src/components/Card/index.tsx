export default function Card({
  children,
  className,
  onClick,
}: {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  onClick?: any;
}) {
  return (
    <div
      className={`
        bg-white
        p-10
        rounded-md
        w-96
        md:w-128
        lg:w-192
        shadow-2xl
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
