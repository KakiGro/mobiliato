import { Container } from '@/components/common/Primitives'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

export function PressFeature({ title, link, image, imageAlt }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.12 })

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">{title}</h2>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-base font-medium text-primary underline-offset-4 hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          </div>
          <div className="mt-8 overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full object-cover transition-transform duration-700 motion-safe:hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
