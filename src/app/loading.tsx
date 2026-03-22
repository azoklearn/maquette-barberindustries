import Image from 'next/image'

export default function Loading() {
  return (
    <section
      className="min-h-[calc(100dvh-10rem)] flex flex-col items-center justify-center bg-dark px-4 py-12"
      aria-busy="true"
      aria-label="Chargement"
    >
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        {/* Anneau + logo */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border-2 border-white/10 border-t-accent-rose border-r-primary-blue animate-spin"
            style={{ animationDuration: '1.2s' }}
          />
          <div className="relative h-20 w-20">
            <Image
              src="/barber.png"
              alt="Barber Industries"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.25)]"
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="font-display text-lg font-semibold text-white tracking-wide">
            BARBER <span className="text-accent-rose">INDUSTRIES</span>
          </p>
          <p className="text-white/45 text-sm">Chargement…</p>
          <div className="mx-auto mt-4 h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/3 animate-shimmer rounded-full bg-gradient-to-r from-primary-blue to-accent-rose" />
          </div>
        </div>
      </div>
    </section>
  )
}
