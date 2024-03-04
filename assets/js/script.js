// Define an array of spacing values
// const imageSpacings = [2000, 10000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] // Adjust these values as needed for each image

// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {
    // functions go here

    // Random color function
    // function getRandomColor() {
    //     let r, g, b
    //     do {
    //         r = Math.floor(Math.random() * 256)
    //         g = Math.floor(Math.random() * 256)
    //         b = Math.floor(Math.random() * 256)
    //     } while (r + g + b < 0 || r + g + b > 200) // Adjust these values to change the range

    //     return `rgb(${r}, ${g}, ${b})`
    // }

    // First letter color change
    //     document.querySelectorAll('section p:first-of-type').forEach((p) => {
    //         const html = p.innerHTML
    //         const firstLetter = html.match(/\b(\w)/) // Match the first word character
    //         if (firstLetter) {
    //             const firstLetterIndex = html.indexOf(firstLetter[0])
    //             p.innerHTML =
    //                 html.substring(0, firstLetterIndex) +
    //                 `<span style="background-color: ${getRandomColor()};">${
    //                     firstLetter[0]
    //                 }</span>` +
    //                 html.substring(firstLetterIndex + 1)
    //         }
    //     })
    // })

    // Cucumber movement on scroll
    document.addEventListener('scroll', function () {
        const cucumbers = document.querySelectorAll('.cucumber')
        const windowHeight = window.innerHeight

        cucumbers.forEach((cucumber) => {
            const cucumberRect = cucumber.getBoundingClientRect()
            const cucumberTop = cucumberRect.top
            const cucumberHeight = cucumberRect.height
            const startOffset = 200 // Adjust this value to change when the movement starts

            if (
                cucumberTop + cucumberHeight > 0 &&
                cucumberTop < windowHeight
            ) {
                let movement = Math.max(
                    0,
                    ((windowHeight - (cucumberTop + startOffset)) /
                        windowHeight) *
                        1000
                )
                movement = Math.min(movement, 1000) // Ensures movement stays within the range

                cucumber.style.transform = `translateX(${movement}px)`
            } else {
                cucumber.style.transform = ''
            }
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
      var playText = document.getElementById('playAudioText');
      var audioPlayer = document.getElementById('audioPlayer');
  
      playText.addEventListener('click', function() {
          audioPlayer.play();
      });
  });

  document.getElementById('playAudio').addEventListener('click', function() {
    var audio = document.getElementById('mayaAudio');
    audio.play();
  });

  })

