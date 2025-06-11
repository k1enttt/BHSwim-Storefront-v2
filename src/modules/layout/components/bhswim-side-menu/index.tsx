"use client"
import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const menuItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Tài khoản", href: "/account" },
  { name: "Giỏ hàng", href: "/cart" },
]

const categories = [
  { name: "Áo tắm", href: "/ao-tam" },
  { name: "Phụ kiện", href: "/phu-kien" },
  { name: "Khuyến mãi", href: "/khuyen-mai" },
]

const BhswimSideMenu = () => {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <Popover className="h-full flex">
      {({ open, close }) => (
        <>
          <Popover.Button
            className="flex items-center justify-center w-10 h-10 rounded hover:bg-ui-bg-base transition"
            aria-label="Mở menu"
          >
            {/* Burger icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" />
            </svg>
          </Popover.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <PopoverPanel className="fixed inset-0 z-50 flex">
              {/* Overlay */}
              <div className="fixed inset-0 bg-black/40" onClick={close} />
              {/* Side menu */}
              <div className="relative bg-white w-64 h-full shadow-lg z-50 p-6 flex flex-col">
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={close}
                  aria-label="Đóng menu"
                >
                  &times;
                </button>
                <nav className="mt-8 flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <LocalizedClientLink
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary"
                      onClick={close}
                    >
                      {item.name}
                    </LocalizedClientLink>
                  ))}
                  {/* Nút Danh mục */}
                  <div
                    className="relative"
                  >
                    <button
                      className="text-lg font-medium hover:text-primary flex items-center gap-2 w-full"
                      type="button"
                      onClick={() => setShowCategories((v) => !v)}
                    >
                      Danh mục
                      <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </button>
                    {showCategories && (
                        <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-ui-border-base rounded shadow-lg z-10">
                        {categories.map((cat) => (
                          <LocalizedClientLink
                          key={cat.href}
                          href={cat.href}
                          className="block px-4 py-2 hover:bg-ui-bg-base text-primary"
                          onClick={close}
                          >
                          {cat.name}
                          </LocalizedClientLink>
                        ))}
                        </div>
                    )}
                  </div>
                </nav>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default BhswimSideMenu