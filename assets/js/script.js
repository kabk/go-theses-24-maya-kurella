// Define an array of spacing values
// const imageSpacings = [2000, 10000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] // Adjust these values as needed for each image

// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function () {

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
