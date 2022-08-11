export default function Button({
  children,
  type
}: {
  children: string
  type: 'button' | 'submit' | 'reset' | undefined
}) {
  return (
    <button className="p-2 bg-purple-600 text-white rounded-md" type={type}>
      {children}
    </button>
  )
}
