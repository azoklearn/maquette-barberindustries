'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const MIN_DISPLAY_MS = 900
const MAX_WAIT_MS = 2800
const EXIT_MS = 450

/**
 * Écran de lancement au premier chargement du site.
 * (Le fichier app/loading.tsx ne s’affiche pas au 1er rendu des pages statiques.)
 */
export default function SiteLaunchLoader() {
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'gone'>('visible')
  const scheduled = useRef(false)
  const startTimeRef = useRef(0)

  const runExit = useCallback(() => {
    if (scheduled.current) return
    scheduled.current = true

    const elapsed = performance.now() - startTimeRef.current
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed)

    window.setTimeout(() => {
      setPhase('exiting')
      window.setTimeout(() => setPhase('gone'), EXIT_MS)
    }, wait)
  }, [])

  useEffect(() => {
    startTimeRef.current = performance.now()
    document.body.style.overflow = 'hidden'

    const maxTimer = window.setTimeout(runExit, MAX_WAIT_MS)

    const onLoad = () => {
      window.clearTimeout(maxTimer)
      runExit()
    }

    if (document.readyState === 'complete') {
      window.clearTimeout(maxTimer)
      runExit()
    } else {
      window.addEventListener('load', onLoad, { once: true })
    }

    return () => {
      window.clearTimeout(maxTimer)
      window.removeEventListener('load', onLoad)
      document.body.style.overflow = ''
    }
  }, [runExit])

  useEffect(() => {
    if (phase === 'gone') {
      document.body.style.overflow = ''
    }
  }, [phase])

  if (phase === 'gone') return null

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-dark px-4 transition-opacity duration-[450ms] ease-out ${
        phase === 'exiting' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={phase === 'exiting'}
      aria-busy={phase === 'visible'}
    >
      <div className="flex flex-col items-center gap-8 animate-fade-in">
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
    </div>
  )
}
