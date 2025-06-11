"use client"
import { useState, useRef, useEffect } from "react"

const LanguageButton = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        className="hover:text-ui-fg-base flex items-center gap-1"
        type="button"
        ref={dropdownRef}
      >
        🌐 VI
        <svg width="12" height="12" fill="none" viewBox="0 0 20 20">
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 w-16 z-10">
          <div className="bg-white border border-ui-border-base rounded shadow-lg">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-ui-bg-base"
              type="button"
              onClick={() => setOpen(false)}
            >
              VI
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-ui-bg-base"
              type="button"
              onClick={() => setOpen(false)}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageButton
