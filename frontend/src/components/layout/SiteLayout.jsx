import { useLocation } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { PageTransition } from '@/components/layout/PageTransition'
import { cn } from '@/lib/utils'

export function SiteLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main
        className={cn(
          'relative flex-1',
          !isHome && 'pt-16 md:pt-[5.5rem]',
        )}
      >
        <PageTransition />
      </main>
      <SiteFooter />
    </div>
  )
}
