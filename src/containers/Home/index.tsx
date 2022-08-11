export default function Home({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full flex flex-col items-center p-10">
      {children}
    </main>
  )
}
