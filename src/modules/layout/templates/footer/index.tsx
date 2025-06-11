import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="container flex flex-col w-full">
        {/* Nav buttons */}
        <div className="text-small-regular flex *:flex-1 flex-col gap-6 xsmall:flex-row items-start justify-between py-20">
          {/* Categories nav buttons */}
          {productCategories && productCategories?.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="text-[13px] leading-[19.5px] font-medium txt-ui-fg-base">
                Categories
              </span>
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                {productCategories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li
                      className="flex flex-col gap-2 text-ui-fg-subtle text-[13px] leading-[19.5px] font-normal"
                      key={c.id}
                    >
                      <LocalizedClientLink
                        className={clx(
                          "hover:text-primary",
                          children && "text-[13px] leading-[19.5px] font-medium"
                        )}
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                      {children && (
                        <ul className="grid grid-cols-1 ml-3 gap-2">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-primary"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {/* Collections nav buttons */}
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-2">
              <span className="text-[13px] leading-[19.5px] font-medium txt-ui-fg-base">
                Collections
              </span>
              <ul
                className={clx(
                  "grid grid-cols-1 gap-2 text-ui-fg-subtle text-[13px] leading-[19.5px] font-normal",
                  {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  }
                )}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-primary"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Medusa nav buttons */}
          <div className="flex flex-col gap-y-2">
            <span className="text-[13px] leading-[19.5px] font-medium txt-ui-fg-base">
              Medusa
            </span>
            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle text-[13px] leading-[19.5px] font-normal">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            {/* Newsletter */}
            <div className="flex flex-col gap-y-4">
              <span className="text-[13px] leading-[19.5px] font-medium txt-ui-fg-base">
                Newsletter
              </span>
              <form className="flex flex-row gap-x-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-ui-border-base rounded px-3 py-2 text-[13px] leading-[19.5px] focus:outline-none focus:border-ui-fg-base flex-1"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/80 text-white rounded w-10 h-10 flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Social media */}
            <div className="flex flex-col gap-y-4 mt-8">
              <span className="text-[13px] leading-[19.5px] font-medium txt-ui-fg-base">
                Follow us
              </span>
              <div className="flex flex-row gap-x-4">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="hover:text-ui-fg-base text-ui-fg-subtle bg-gray-100/70 rounded-md p-2 transition-colors"
                >
                  {/* X (Twitter) icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M17.53 6.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72 4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72-4.72-4.72A.75.75 0 0 1 7.09 6.47l4.72 4.72 4.72-4.72z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-ui-fg-base text-ui-fg-subtle bg-gray-100/70 rounded-md p-2 transition-colors"
                >
                  {/* Facebook icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5v-7h-2v-3h2v-2a3 3 0 0 1 3-3h2v3h-2a1 1 0 0 0-1 1v1h3l-1 3h-2v7h3a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-ui-fg-base text-ui-fg-subtle bg-gray-100/70 rounded-md p-2 transition-colors"
                >
                  {/* Instagram icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="hover:text-ui-fg-base text-ui-fg-subtle bg-gray-100 rounded-md p-2 transition-colors"
                >
                  {/* YouTube icon */}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="12"
                      rx="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polygon points="10,9 16,12 10,15" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="text-[13px] leading-5 font-normal">
            © {new Date().getFullYear()} BHSwim Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
