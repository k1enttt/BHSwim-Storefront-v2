import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import localFont from "next/font/local"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeue-Roman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-helvetica-neue",
  display: "swap",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={helveticaNeue.className}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
