import { useEffect, useRef, useState, ElementType, ReactNode } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  as?: ElementType
}

export default function AnimatedText({
  text,
  className = '',
  delay = 30,
  as: Component = 'span'
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const letters = text.split('')

  return (
    <Component ref={ref as React.Ref<HTMLSpanElement>} className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(15px) rotateX(-80deg)',
            transition: `all 0.4s ease-out ${index * delay}ms`,
          }}
        >
          {letter === ' ' ? ' ' : letter}
        </span>
      ))}
    </Component>
  )
}
