'use client'

import { useState, useEffect, useCallback } from 'react'

const GRID_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_FOOD = { x: 15, y: 15 }
const INITIAL_DIRECTION = { x: 0, y: -1 }

const TECH_LOGOS = [
  // Languages
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-yellow-100' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'bg-blue-100' },
  { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: 'bg-blue-100' },
  { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'bg-red-100' },
  
  // Frontend
  { name: 'ReactJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'bg-blue-100' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'bg-gray-100' },
  { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: 'bg-blue-100' },
  { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: 'bg-purple-100' },
  
  // Backend
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-100' },
  { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', color: 'bg-gray-100' },
  { name: 'REST APIs', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-green-100' },
  { name: 'Socket.IO', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', color: 'bg-black' },
  
  // Database
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'bg-green-100' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'bg-blue-100' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'bg-orange-100' },
  
  // DevOps
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'bg-blue-100' },
  { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'bg-blue-100' },
  
  // Tools
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'bg-orange-100' },
  { name: 'Postman', url: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', color: 'bg-orange-100' },
  { name: 'JWT', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'bg-purple-100' },
  { name: 'DSA', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'bg-yellow-100' }
]

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [techsEaten, setTechsEaten] = useState<string[]>([])

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    }
    return newFood
  }, [])

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    setGameOver(false)
    setScore(0)
    setGameStarted(false)
    setIsPaused(false)
    setTechsEaten([])
  }, [])

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted || isPaused) return

    setSnake(currentSnake => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }
      
      head.x += direction.x
      head.y += direction.y

      // Check for collisions with walls
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        return currentSnake
      }

      // Check for collisions with self
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        return currentSnake
      }

      newSnake.unshift(head)

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore(prevScore => prevScore + 1)
        
        // Add a random tech to the techs eaten
        const randomTech = TECH_LOGOS[Math.floor(Math.random() * TECH_LOGOS.length)].name
        setTechsEaten(prev => [...prev, randomTech])
        
        // Generate new food
        setFood(generateFood())
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameOver, gameStarted, isPaused, generateFood])

  // Handle keyboard controls for arrow keys only
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!gameStarted || gameOver || isPaused) return
    
    switch (e.key) {
      case 'ArrowUp':
        if (direction.y !== 1) setDirection({ x: 0, y: -1 })
        break
      case 'ArrowDown':
        if (direction.y !== -1) setDirection({ x: 0, y: 1 })
        break
      case 'ArrowLeft':
        if (direction.x !== 1) setDirection({ x: -1, y: 0 })
        break
      case 'ArrowRight':
        if (direction.x !== -1) setDirection({ x: 1, y: 0 })
        break
    }
  }, [gameStarted, gameOver, isPaused, direction])
  
  // Click handler for the game
  const handleGameClick = useCallback(() => {
    if (!gameStarted && !gameOver) {
      // Start the game if not started
      setGameStarted(true)
      return
    }
    
    if (gameStarted && !gameOver) {
      // Pause/unpause the game if already started
      setIsPaused(prev => !prev)
      return
    }
    
    if (gameOver) {
      // Reset the game if game over
      resetGame()
      return
    }
  }, [gameStarted, gameOver, resetGame])

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150)
    return () => clearInterval(gameInterval)
  }, [moveSnake])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="bg-card/30 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-xl border border-primary/10 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Snake Game
          </h1>
          <div className="flex justify-center space-x-8 text-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{score}</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary/80">{highScore}</div>
              <div className="text-sm text-muted-foreground">High Score</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div 
            className="grid gap-1 bg-background/50 p-2 sm:p-4 rounded-xl border-2 border-primary/30 cursor-pointer"
            onClick={handleGameClick}
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: '400px'
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE
              const y = Math.floor(index / GRID_SIZE)
              
              const isSnake = snake.some(segment => segment.x === x && segment.y === y)
              const isHead = snake[0]?.x === x && snake[0]?.y === y
              const isFood = food.x === x && food.y === y
              
              let cellClass = 'w-full h-full rounded-sm transition-all duration-75'
              
              if (isFood) {
                cellClass += ' bg-primary shadow-lg shadow-primary/50 animate-pulse'
              } else if (isSnake) {
                if (isHead) {
                  cellClass += ' bg-primary/90 shadow-lg shadow-primary/50'
                } else {
                  cellClass += ' bg-primary/70'
                }
              } else {
                cellClass += ' bg-card/30'
              }
              
              return (
                <div
                  key={index}
                  className={cellClass}
                />
              )
            })}
          </div>

          {gameOver && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-xl cursor-pointer" onClick={handleGameClick}>
              <div className="text-center p-2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-primary">Game Over!</h2>
                <p className="text-lg sm:text-xl mb-2 sm:mb-4">Final Score: {score}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Click to play again</p>
              </div>
            </div>
          )}

          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-xl cursor-pointer" onClick={handleGameClick}>
              <div className="text-center p-2">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Ready to Play?</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Click to start</p>
                <p className="text-xs text-muted-foreground/80">Use arrow keys to control</p>
              </div>
            </div>
          )}

          {isPaused && gameStarted && !gameOver && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-xl cursor-pointer" onClick={handleGameClick}>
              <div className="text-center p-2">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Paused</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">Click to continue</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
            <p>🎮 Arrow keys to move</p>
            <p>⏸️ Click to pause/unpause</p>
            <p>🎯 Eat the food to grow</p>
          </div>
          
          {techsEaten.length > 0 && (
            <div className="mt-4 p-3 bg-card/30 rounded-lg border border-primary/10">
              <h3 className="text-sm font-semibold mb-2">Technologies Mastered:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {Array.from(new Set(techsEaten)).map((tech, index) => {
                  const techInfo = TECH_LOGOS.find(t => t.name === tech)
                  return (
                    <span 
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-background/50 border border-primary/20 flex items-center gap-1"
                    >
                      <img 
                        src={techInfo?.url} 
                        alt={tech}
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      {tech}
                    </span>
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {Array.from(new Set(techsEaten)).length} unique technologies learned!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
