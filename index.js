let gsapMediaQ = gsap.matchMedia();
gsapMediaQ.add('(min-width: 1024px)', () => {
  gsap.from('.curly-brackets-close', {
    duration:2,
    scale: .7,
    x:-400
  })
  
  gsap.from('.curly-brackets-open', {
    duration:2,
    scale: .7,
    x:400
  })
  
  gsap.from('.main-texts', {
    duration:1,
    delay: .6,
    opacity: 0,
    scale: .9,
  })
  
  
  
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-subheading',
      start: 'top 95%',
      end: 'bottom 60%',
      scrub: true,
      marker: true
    }
  })
  
  let tlAboutImg = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-img',
      start: 'top 80%',
      end: 'bottom 70%',
      scrub: true,
      marker: true
    }
  })
  
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects-subheading',
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: true,
      marker: true
    }
  })
  
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.skills-subheading',
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: true,
      marker: true
    }
  })
  
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.react',
      start: 'top 110%',
      end: 'bottom 90%',
      scrub: true,
      marker: true
    }
  })
  
  let tlAsterics = gsap.timeline({
    scrollTrigger: {
      trigger: '.asterics',
      start: 'top 110%',
      end: 'bottom 90%',
      scrub: true,
      marker: true
    }
  })
  
  
  
  tl.from('.about-subheading', {
    x: -400
  })
  
  tl.from('.about-para', {
    opacity: 0,
    // delay: .5
  })
  
  tlAboutImg.from('.about-img', {
    x: 600
  })
  
  tl2.from('.projects-subheading', {
    x: -400
  })
  
  tl2.from('.projects-para', {
    opacity: 0
  })
  
  tl2.from('.card-1', {
    y: 400,
    opacity: 0
  })
  
  tl2.from('.card-2', {
    y: 390,
    opacity: 0
  })
  
  tl2.from('.card-3', {
    y: 370,
    opacity: 0
  })
  
  tl3.from('.skills-subheading', {
    x: -400
  })
  
  tl3.from('.skills-para', {
    opacity: 0
  })
  
  tl3.from('.mongo', {
    opacity: 0,
    y: 200
  })
  
  tl3.from('.express', {
    opacity: 0,
    y: 200
  })
  
  tl4.from('.react', {
    opacity: 0,
    y: 200
  })
  
  tl4.from('.node', {
    opacity: 0,
    y: 300
  })
  
  
  tlAsterics.from('.asterics', {
    TransformStream: 10
  })
  
})

// gsapMediaQ.add('(max-width: 425px)', () => {
//   gsap.from('.curly-brackets-close', {
//     duration:2,
//     scale: .7,
//     x:-400
//   })
  
//   gsap.from('.curly-brackets-open', {
//     duration:2,
//     scale: .7,
//     x:400
//   })
  
//   gsap.from('.main-texts', {
//     duration:1,
//     delay: .6,
//     opacity: 0,
//     scale: .9,
//   })
  
  
  
  
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.about-subheading',
//       start: 'top 95%',
//       end: 'bottom 60%',
//       scrub: true,
//       marker: true
//     }
//   })
  
//   let tlAboutImg = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.about-img',
//       start: 'top 80%',
//       end: 'bottom 70%',
//       scrub: true,
//       marker: true
//     }
//   })
  
//   let tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.projects-subheading',
//       start: 'top 70%',
//       end: 'bottom 30%',
//       scrub: true,
//       marker: true
//     }
//   })
  
//   let tl3 = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.skills-subheading',
//       start: 'top 70%',
//       end: 'bottom 30%',
//       scrub: true,
//       marker: true
//     }
//   })
  
//   let tl4 = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.react',
//       start: 'top 110%',
//       end: 'bottom 90%',
//       scrub: true,
//       marker: true
//     }
//   })
  
//   let tlAsterics = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.asterics',
//       start: 'top 110%',
//       end: 'bottom 90%',
//       scrub: true,
//       marker: true
//     }
//   })
  
  
  
//   tl.from('.about-subheading', {
//     x: -400
//   })
  
//   tl.from('.about-para', {
//     opacity: 0,
//     // delay: .5
//   })
  
//   tlAboutImg.from('.about-img', {
//     x: 600
//   })
  
//   tl2.from('.projects-subheading', {
//     x: -400
//   })
  
//   tl2.from('.projects-para', {
//     opacity: 0
//   })
  
//   tl2.from('.card-1', {
//     y: 400,
//     opacity: 0
//   })
  
//   tl2.from('.card-2', {
//     y: 390,
//     opacity: 0
//   })
  
//   tl2.from('.card-3', {
//     y: 370,
//     opacity: 0
//   })
  
//   tl3.from('.skills-subheading', {
//     x: -400
//   })
  
//   tl3.from('.skills-para', {
//     opacity: 0
//   })
  
//   tl3.from('.mongo', {
//     opacity: 0,
//     y: 200
//   })
  
//   tl3.from('.express', {
//     opacity: 0,
//     y: 200
//   })
  
//   tl4.from('.react', {
//     opacity: 0,
//     y: 200
//   })
  
//   tl4.from('.node', {
//     opacity: 0,
//     y: 300
//   })
  
  
//   tlAsterics.from('.asterics', {
//     TransformStream: 10
//   })
// })

gsap.from('.logo', {
  duration:1,
  // scale: 0
  x:-200
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
