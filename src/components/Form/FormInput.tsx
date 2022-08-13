export default function FormInput({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange: (event: any) => void;
}) {
  return (
    <input
      className="rounded-md p-1 border border-slate-200"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
