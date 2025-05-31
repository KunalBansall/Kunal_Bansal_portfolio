import SnakeGame from "@/components/snake-game"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SnakeGamePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Interactive Snake Game
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Have fun with this interactive Snake Game! Collect tech stack icons as you play and see how many technologies you can master.
          </p>
        </div>
        <SnakeGame />
      </div>
      <Footer />
    </main>
  )
}
