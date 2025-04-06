export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid grid-cols-10 grid-rows-10 gap-4 opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-white/10" />
        ))}
      </div>
    </div>
  )
}

