import { Container } from '@/components/common/Primitives'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'
import { cn } from '@/lib/utils'

export function NosotrosStory({ title, paragraphs, image, imageAlt }) {
  const { ref, visible } = useRevealOnScroll({ threshold: 0.15 })

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            'grid items-center gap-12 md:grid-cols-2 md:gap-20',
            'transition-all duration-700 ease-out',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-lg leading-relaxed text-muted-foreground md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="group overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
