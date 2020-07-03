var outside
var fetchURL = "https://source.unsplash.com/1920x2880/?' + 'nature' + '"

fetch(fetchURL)
  .then(response => response.blob())
  .then(images => {
      const background = document.querySelector('#bg');
      // Then create a local URL for that image and print it
      outside = URL.createObjectURL(images)
      // console.log(outside)
      background.style.backgroundImage = 'url("' + outside + '")';
  })