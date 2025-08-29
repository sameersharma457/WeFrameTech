export default function Avatar({ name }: { name?: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
      {name ? name[0] : 'U'}
    </div>
  )
}
