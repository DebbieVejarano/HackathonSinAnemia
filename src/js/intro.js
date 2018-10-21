const fillSlide = ({ image, title, text }) => {
    console.log(image, title, text)
    document.getElementById('slide-container').innerHTML = `
     <div class= "container">
     <image class="responsive-img" src="${image}"/></div>
     <h6 class="center-align bold-text">${title}</h6>
     <p class="center-align">${text}</p>`
  }
  
  let position = 0
  const slideContent = [
    {
      image: '../img/frame (1).png',
      title: 'Hola, soy la wawa',
      text: 'Que bueno que te preocupes por tu bebe y te unas al movimiento ¡No a la anemia!'
    },
    {
      image: '../img/estrella2.png',
      title: 'Ayudalo a crecer',
      text: 'Aprende a tener a tu niño fuerte e inteligente y gana muchas estrellas, recetas y más'
    }
  ]
  fillSlide(slideContent[position]);
  
  setInterval(() => {
    position === 0 ? position = 1 : position = 0;
    fillSlide(slideContent[position])
  }, 5000)