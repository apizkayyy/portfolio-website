import { motion, useReducedMotion } from 'framer-motion'

// Shared easing — a calm, editorial curve
export const EASE = [0.2, 0.7, 0.3, 1]

// A reveal-on-scroll wrapper. Respects prefers-reduced-motion.
export function Reveal({
  children,
  as = 'div',
  y = 20,
  delay = 0,
  duration = 0.6,
  className,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: EASE, delay },
        },
      }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// A container that staggers its direct motion children into view.
export function RevealGroup({
  children,
  as = 'div',
  stagger = 0.08,
  className,
  amount = 0.25,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  const variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : stagger },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// A single item designed to be a child of RevealGroup.
export function RevealItem({ children, as = 'div', y = 16, className, ...rest }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  const variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }

  return (
    <MotionTag className={className} variants={variants} {...rest}>
      {children}
    </MotionTag>
  )
}
