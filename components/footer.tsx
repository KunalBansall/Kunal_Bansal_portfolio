export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/60 text-sm">© {currentYear} Kunal Bansal. All rights reserved.</p>
      </div>
    </footer>
  )
}

