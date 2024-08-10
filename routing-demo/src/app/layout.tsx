import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Root", // This over write the template
    default: "Next.js Tutorial - Codevolution", //set a default title for the childrens
    template:"%s | Codevolution" // %s is substitute for the title in the children page
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}        
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
          backgroundColor: "lightpink",
          padding: "1rem"
        }}  
        >
          <p>Footer</p>
        </footer>
        </body>
    </html>
  )
}
