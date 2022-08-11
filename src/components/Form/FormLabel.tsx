export default function FormLabel({
  children,
  htmlFor
}: {
  children: any
  htmlFor?: string
}) {
  return <label htmlFor={htmlFor}>{children ? children : null}</label>
}
