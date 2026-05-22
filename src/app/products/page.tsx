import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema, productSchema } from '@/lib/seo'
import { PRODUCTS, SITE } from '@/lib/data'
import CTABand from '@/components/CTABand'
import ProductsHero from '@/components/ProductsHero'

export const metadata: Metadata = buildMetadata({
  title: 'Cap & Closure Machines',
  description:
    'Explore HEM Automation\'s full range — Cap Slitting & Folding, Hot Stamping, Lacquering, Wad Insertion, Flip Top Closing, and Special Purpose Machines. Up to 800 caps/min.',
  path: '/products',
  keywords: ['cap slitting machine India', 'hot stamping machine', 'wad insertion machine', 'lacquering machine', 'SPM manufacturer Mumbai'],
})

export default function ProductsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Products', url: `${SITE.url}/products` },
  ])

  const productsLD = PRODUCTS.map(p =>
    productSchema({ name: p.name, description: p.description, slug: p.slug })
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {productsLD.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* Compact carousel hero */}
      <ProductsHero />

      {/* Products grid */}
      <section className="section">
        <div className="container">
          <div className="products-full-grid">
            {PRODUCTS.map(p => (
              <div className="prodcard prodcard-full" key={p.slug} id={p.slug}>

                {/* Image / thumbnail */}
                <div className="prodcard-img">
                  {p.videoId ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                      alt={p.name}
                      className="prodcard-thumb"
                      loading="lazy"
                    />
                  ) : (
                    <div className="prodcard-icon-bg">
                      <span className="prodcard-icon">{p.icon}</span>
                    </div>
                  )}
                  {p.tag && <span className="prodcard-tag">{p.tag}</span>}
                </div>

                <div className="prodcard-body">
                  <div className="prodcard-name">{p.name}</div>
                  <div className="speed-badge" style={{ marginBottom: 12 }}>⚡ {p.speed}</div>
                  <div className="prodcard-desc" style={{ marginBottom: 16 }}>{p.description}</div>
                  <ul className="prodcard-features">
                    {p.features.map(f => (
                      <li key={f}>
                        <span className="pf-check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
