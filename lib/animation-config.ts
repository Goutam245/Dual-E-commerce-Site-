export const easing = {
  smooth: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  snappy: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.slow, ease: easing.smooth },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: duration.normal, ease: easing.smooth },
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: duration.normal, ease: easing.smooth },
}
