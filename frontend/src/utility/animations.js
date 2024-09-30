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


export const SlideLeft = (delay) => {
  return {
    hidden: { opacity : 0,x: 100 },
    visible: {
      opacity : 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        delay : delay
      },
    },
  }
}