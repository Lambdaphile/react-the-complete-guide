export default function Button({
  children,
  type,
  onClick,
}: {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}) {
  return (
    <button className="p-2 bg-purple-600 text-white rounded-md" type={type}>
      {children}
    </button>
  );
}
