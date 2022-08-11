export default function ListItem({
  children,
  className
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return (
    <li className={`p-2 border-b border-slate-200 ${className}`}>{children}</li>
  )
}
