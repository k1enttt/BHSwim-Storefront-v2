import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white border-ui-border-base">
        {/* Tools bar: đa ngôn ngữ, tài khoản, đăng xuất, danh sách yêu thích */}
        <div className="hidden md:flex items-center justify-between px-4 py-2 border-b border-ui-border-base text-xs">
          <span className="text-ui-fg-subtle">
            Chào mừng bạn đến với BHSWIM!
          </span>
          <div className="flex items-center gap-4">
            {/* Nút đa ngôn ngữ */}
            <button className="hover:text-ui-fg-base" type="button">
              🌐 VN
            </button>
            {/* Tài khoản */}
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/account"
            >
              Tài khoản
            </LocalizedClientLink>
            {/* Đăng xuất */}
            <button className="hover:text-ui-fg-base" type="button">
              Đăng xuất
            </button>
            {/* Danh sách yêu thích */}
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/wishlist"
            >
              Yêu thích
            </LocalizedClientLink>
          </div>
        </div>

        {/* Search bar: Logo, search bar, cart button */}
        {/* Mobile: sidebar + account left, logo center, search+cart right */}
        <div className="flex md:hidden items-center justify-between px-4 py-3 gap-2 text-primary">
          {/* Left: Side menu + Account */}
          <div className="flex items-center gap-2">
            <SideMenu regions={regions} />
            <LocalizedClientLink
              href="/account"
              className="hover:text-ui-fg-base flex items-center"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </LocalizedClientLink>
          </div>
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <LocalizedClientLink href="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </LocalizedClientLink>
          </div>
          {/* Right: Search icon + Cart button */}
          <div className="flex items-center gap-2">
            {/* Search icon button */}
            <button
              type="button"
              className="hover:text-ui-fg-base"
              aria-label="Tìm kiếm"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 20l-3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* Cart button */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M6 6h15l-1.5 9h-13z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="9" cy="20" r="1" fill="currentColor" />
                    <circle cx="18" cy="20" r="1" fill="currentColor" />
                  </svg>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </div>

        {/* Desktop: Logo left, search center, cart right */}
        <div className="hidden md:grid grid-cols-12 items-center px-4 py-3 gap-4">
          {/* Logo - 4/12 */}
          <div className="col-span-4">
            <LocalizedClientLink href="/" className="flex items-center">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </LocalizedClientLink>
          </div>
          {/* Search bar - 6/12 */}
          <div className="col-span-6">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full border border-ui-border-base rounded px-3 py-2 text-sm focus:outline-none focus:border-ui-fg-base"
            />
          </div>
          {/* Cart button - 2/12 */}
          <div className="col-span-2 flex justify-end">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </div>

        {/* Navigation bar */}
        <nav className="bg-primary text-primary-foreground w-full md:block hidden">
          <ul className="flex items-center gap-2 px-4 py-2">
            <li>
              <LocalizedClientLink
                href="/"
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-medium"
              >
                Trang chủ
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/shop"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                Sản phẩm
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/collections"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                Bộ sưu tập
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/about"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                Giới thiệu
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/blog"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                Blog
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/contact"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                Liên hệ
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/faq"
                className="hover:text-ui-fg-base px-3 py-1 rounded font-medium"
              >
                FAQ
              </LocalizedClientLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
