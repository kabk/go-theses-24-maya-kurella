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
    // document.addEventListener('scroll', function () {
    //     const cucumbers = document.querySelectorAll('.cucumber')
    //     const windowHeight = window.innerHeight

    //     cucumbers.forEach((cucumber) => {
    //         const cucumberRect = cucumber.getBoundingClientRect()
    //         const cucumberTop = cucumberRect.top
    //         const cucumberHeight = cucumberRect.height
    //         const startOffset = 200 // Adjust this value to change when the movement starts

    //         if (
    //             cucumberTop + cucumberHeight > 0 &&
    //             cucumberTop < windowHeight
    //         ) {
    //             let movement = Math.max(
    //                 0,
    //                 ((windowHeight - (cucumberTop + startOffset)) /
    //                     windowHeight) *
    //                     1000
    //             )
    //             movement = Math.min(movement, 1000) // Ensures movement stays within the range

    //             cucumber.style.transform = `translateX(${movement}px)`
    //         } else {
    //             cucumber.style.transform = ''
    //         }
    //     })
    // })
    document.addEventListener('DOMContentLoaded', function () {
        var playText = document.getElementById('playAudioText')
        var audioPlayer = document.getElementById('audioPlayer')

        playText.addEventListener('click', function () {
            audioPlayer.play()
        })
    })
    //play im maya audio
    document.getElementById('playAudio').addEventListener('click', function () {
        var audio = document.getElementById('mayaAudio')
        audio.play()
    })

    //play slowy
    document
        .getElementById('playAudio2')
        .addEventListener('click', function () {
            var audio = document.getElementById('slowyAudio')
            audio.play()
        })

    //play envelopes
    document
        .getElementById('playAudio3')
        .addEventListener('click', function () {
            var audio = document.getElementById('envelopesAudio')
            audio.play()
        })

    //play thoughts
    document
        .getElementById('playAudio4')
        .addEventListener('click', function () {
            var audio = document.getElementById('thoughtsAudio')
            audio.play()
        })

    //play billy
    document
        .getElementById('playAudio5')
        .addEventListener('click', function () {
            var audio = document.getElementById('billyAudio')
            audio.play()
        })

    //play beautiful
    document
        .getElementById('playAudio6')
        .addEventListener('click', function () {
            var audio = document.getElementById('beautifulAudio')
            audio.play()
        })

    //play analyse
    document
        .getElementById('playAudio7')
        .addEventListener('click', function () {
            var audio = document.getElementById('analyseAudio')
            audio.play()
        })

    //play forest bunny
    document
        .getElementById('playAudio8')
        .addEventListener('click', function () {
            var audio = document.getElementById('bunnyAudio')
            audio.play()
        })

    //play nature sky
    document
        .getElementById('playAudio9')
        .addEventListener('click', function () {
            var audio = document.getElementById('natureAudio')
            audio.play()
        })

    //play shrink
    document
        .getElementById('playAudio10')
        .addEventListener('click', function () {
            var audio = document.getElementById('shrinkAudio')
            audio.play()
        })

    //play bomb
    document
        .getElementById('playAudio11')
        .addEventListener('click', function () {
            var audio = document.getElementById('bombAudio')
            audio.play()
        })

    //play singing
    document
        .getElementById('playAudio12')
        .addEventListener('click', function () {
            var audio = document.getElementById('singingAudio')
            audio.play()
        })

    //play inside
    document
        .getElementById('playAudio13')
        .addEventListener('click', function () {
            var audio = document.getElementById('insideAudio')
            audio.play()
        })

 //play dumb
    document
    .getElementById('playAudio14')
    .addEventListener('click', function () {
        var audio = document.getElementById('dumbAudio')
        audio.play()
    })

 //play zubazuba
 document
 .getElementById('playAudio15')
 .addEventListener('click', function () {
     var audio = document.getElementById('zubazubaAudio')
     audio.play()
 })

  //play what did
  document
  .getElementById('playAudio16')
  .addEventListener('click', function () {
      var audio = document.getElementById('whatAudio')
      audio.play()
  })


})
