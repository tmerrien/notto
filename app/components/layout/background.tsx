export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Geometric sun circles */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-400 to-red-500 rounded-full opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-50" />
      
      {/* Line patterns */}
      <div className="absolute top-1/2 left-1/4 w-px h-24 bg-amber-600/40" />
      <div className="absolute bottom-1/3 right-1/3 w-px h-16 bg-red-500/40" />
    </div>
  )
}