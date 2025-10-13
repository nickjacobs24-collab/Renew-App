import './globals.css'

export const metadata = {
  title: 'Renew - Supplements Made Simple',
  description: 'Clear guidance for better health decisions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}