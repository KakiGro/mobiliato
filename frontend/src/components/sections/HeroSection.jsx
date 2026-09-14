import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'
import { useHeroScrollFade } from '@/hooks/useHeroScrollFade'
import { cn } from '@/lib/utils'

export function HeroSection({ title, cta, image, imageAlt }) {
  const { ref, progress, opacity } = useHeroScrollFade()
  const [fixedBackground, setFixedBackground] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setReduceMotion(motion.matches)
      setFixedBackground(media.matches && !motion.matches)
    }
    update()
    media.addEventListener('change', update)
    motion.addEventListener('change', update)
    return () => {
      media.removeEventListener('change', update)
      motion.removeEventListener('change', update)
    }
  }, [])

  const scale = reduceMotion ? 1 : 1.04 + progress * 0.06
  const shift = reduceMotion ? 0 : progress * 48
  const fade = reduceMotion ? 1 : opacity

  return (
    <section ref={ref} className="relative bg-background">
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={{
          opacity: fade,
          visibility: fade <= 0 ? 'hidden' : 'visible',
        }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `linear-gradient(rgba(27, 36, 28, 0.35), rgba(27, 36, 28, 0.2)), url(${image})`,
            backgroundAttachment: fixedBackground ? 'fixed' : 'scroll',
            transform: `scale(${scale})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/70 via-forest/20 to-transparent" />
      </div>

      <Container
        className="relative z-10 flex min-h-[92svh] items-center py-28 md:min-h-[100svh] md:py-32"
        style={{
          opacity: fade,
          transform: `translateY(${shift}px)`,
        }}
      >
        <div className="max-w-2xl">
          <h1
            className={cn(
              'font-serif text-5xl leading-[1.05] text-bone md:text-7xl lg:text-8xl',
              !reduceMotion &&
                'animate-in fade-in slide-in-from-bottom-4 duration-700',
            )}
          >
            {title}
          </h1>
          <div
            className={cn(
              'mt-10',
              !reduceMotion &&
                'animate-in fade-in slide-in-from-bottom-3 duration-700',
            )}
            style={
              reduceMotion
                ? undefined
                : { animationDelay: '150ms', animationFillMode: 'backwards' }
            }
          >
            <Button asChild size="lg">
              <Link to={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>

      <p className="sr-only">{imageAlt}</p>
    </section>
  )
}
