export const SlideRight = (delay) => {
  return {
    hidden: { opacity : 0,y: 100 },
    visible: {
      opacity : 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        delay : delay
      },
    },
  }
}