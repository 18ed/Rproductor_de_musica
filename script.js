
// const audioPlayer = document.getElementById('audioPlayer');
// const playButton = document.getElementById('playButton');
// const pauseButton = document.getElementById('pauseButton');
// const volumeSlider = document.getElementById('volumeSlider');
// const progressBar = document.getElementById('progressBar');

// playButton.addEventListener('click', () => {
//     audioPlayer.play();
//   });
  
//   pauseButton.addEventListener('click', () => {
//     audioPlayer.pause();
//   });
  
//   volumeSlider.addEventListener('input', () => {
//     audioPlayer.volume = volumeSlider.value / 100;
//   });
  
//   audioPlayer.addEventListener('timeupdate', () => {
//     const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
//     progressBar.style.width = progress + '%';
//   });
const tracklist = document.getElementById("tracklist")
  
  axios.get ("https://leonardoapi.onrender.com/songs")
  .then((res) => {

    res.data.songs.map ( (song) =>{

      const div = document.createElement("div")
      div.classList.add("h-16")
      div.innerHTML = `
        <img src="${song.path.front}" alt="" class="h=full">
      `

      tracklist.appendChild(div)
    })


  })
  