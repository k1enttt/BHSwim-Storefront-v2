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
                className="grid grid-cols-1 gap-2 w-fit"
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
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="hover:text-ui-fg-base text-ui-fg-subtle bg-gray-100/70 rounded-md p-2 transition-colors"
                >
                  {/* TikTok icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1885 9.61003C19.3819 9.61389 17.6199 9.04997 16.1512 7.99795V15.3323C16.1508 16.6906 15.7357 18.0165 14.9613 19.1325C14.187 20.2485 13.0903 21.1015 11.818 21.5773C10.5458 22.0532 9.15853 22.1292 7.84186 21.7953C6.52519 21.4614 5.34186 20.7335 4.45013 19.7088C3.5584 18.6841 3.00078 17.4116 2.85186 16.0615C2.70293 14.7113 2.9698 13.3479 3.61676 12.1535C4.26373 10.9591 5.25995 9.99071 6.47219 9.37785C7.68443 8.76499 9.05489 8.53687 10.4003 8.724V12.4117C9.7851 12.218 9.12446 12.2237 8.51268 12.4279C7.90091 12.632 7.36928 13.0243 6.99372 13.5486C6.61816 14.0729 6.41786 14.7025 6.42143 15.3474C6.42499 15.9924 6.63224 16.6197 7.01357 17.1398C7.39491 17.66 7.93084 18.0463 8.54483 18.2437C9.15883 18.4411 9.81949 18.4395 10.4325 18.239C11.0455 18.0386 11.5795 17.6496 11.9583 17.1276C12.337 16.6056 12.5411 15.9772 12.5415 15.3323V1H16.1512C16.1492 1.30529 16.1753 1.61013 16.2292 1.91064C16.3547 2.58049 16.6155 3.21771 16.9957 3.78334C17.3758 4.34898 17.8673 4.83116 18.4401 5.20041C19.2555 5.73894 20.2113 6.02567 21.1885 6.02491V9.61003Z"
                      fill="black"
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z"
                      fill="#070904"
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 3.24268H8C5.23858 3.24268 3 5.48126 3 8.24268V16.2427C3 19.0041 5.23858 21.2427 8 21.2427H16C18.7614 21.2427 21 19.0041 21 16.2427V8.24268C21 5.48126 18.7614 3.24268 16 3.24268ZM19.25 16.2427C19.2445 18.0353 17.7926 19.4872 16 19.4927H8C6.20735 19.4872 4.75549 18.0353 4.75 16.2427V8.24268C4.75549 6.45003 6.20735 4.99817 8 4.99268H16C17.7926 4.99817 19.2445 6.45003 19.25 8.24268V16.2427ZM16.75 8.49268C17.3023 8.49268 17.75 8.04496 17.75 7.49268C17.75 6.9404 17.3023 6.49268 16.75 6.49268C16.1977 6.49268 15.75 6.9404 15.75 7.49268C15.75 8.04496 16.1977 8.49268 16.75 8.49268ZM12 7.74268C9.51472 7.74268 7.5 9.7574 7.5 12.2427C7.5 14.728 9.51472 16.7427 12 16.7427C14.4853 16.7427 16.5 14.728 16.5 12.2427C16.5027 11.0484 16.0294 9.90225 15.1849 9.05776C14.3404 8.21327 13.1943 7.74002 12 7.74268ZM9.25 12.2427C9.25 13.7615 10.4812 14.9927 12 14.9927C13.5188 14.9927 14.75 13.7615 14.75 12.2427C14.75 10.7239 13.5188 9.49268 12 9.49268C10.4812 9.49268 9.25 10.7239 9.25 12.2427Z"
                      fill="#070904"
                    />
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.593 7.20301C21.4791 6.78041 21.2565 6.39501 20.9473 6.08518C20.6382 5.77534 20.2533 5.55187 19.831 5.43701C18.265 5.00701 12 5.00001 12 5.00001C12 5.00001 5.73596 4.99301 4.16896 5.40401C3.74689 5.52415 3.36279 5.75078 3.05353 6.06214C2.74427 6.3735 2.52025 6.75913 2.40296 7.18201C1.98996 8.74801 1.98596 11.996 1.98596 11.996C1.98596 11.996 1.98196 15.26 2.39196 16.81C2.62196 17.667 3.29696 18.344 4.15496 18.575C5.73696 19.005 11.985 19.012 11.985 19.012C11.985 19.012 18.25 19.019 19.816 18.609C20.2385 18.4943 20.6237 18.2714 20.9336 17.9622C21.2435 17.653 21.4673 17.2682 21.583 16.846C21.997 15.281 22 12.034 22 12.034C22 12.034 22.02 8.76901 21.593 7.20301ZM9.99596 15.005L10.001 9.00501L15.208 12.01L9.99596 15.005Z"
                      fill="#070904"
                    />
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
