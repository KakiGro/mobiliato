import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Primitives'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

export function CtaBanner({ title, subtitle, button }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.15 })

  return (
    <section className="bg-forest py-20 text-bone md:py-28">
      <Container
        ref={ref}
        className={cn(
          'text-center transition-all duration-700 ease-out',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        <h2 className="font-serif text-4xl text-bone md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-xl text-bone/80">{subtitle}</p>
        <Button asChild size="lg" className="mt-10">
          <Link to={button.href}>{button.label}</Link>
        </Button>
      </Container>
    </section>
  )
}
