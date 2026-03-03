const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const playlistEl = document.getElementById("playlist");

let songs = [
    {
        title: "Sew Telamdo",
        artist: "Gosaye Tesfaye",
        src: "Music/Gosaye Tesfaye - Sew Telamdo - XNB2UicC5zo.m4a"
    },
    {
        title: "Abebayehosh",
        artist: "Teddy Afro",
        src: "Music/አበባየሆሽ_Teddy_Afro_SINGLES_Music.mp3"
    },
    {
        title: "Zemen",
        artist: "Abdu Kiar",
        src: "Music/Zemen - Abdu Kiar.m4a"
    }
];

let songIndex = 0;

// Load song
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

loadSong(songs[songIndex]);

// Play / Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸️";
    } else {
        audio.pause();
        playBtn.innerText = "▶️";
    }
});

// Next
nextBtn.addEventListener("click", () => {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = "⏸️";
});

// Previous
prevBtn.addEventListener("click", () => {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = "⏸️";
});

// Update Progress
audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";

    // Time
    currentTimeEl.innerText = formatTime(currentTime);
    durationEl.innerText = formatTime(duration);
});

// Click progress bar
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

// Format time
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}


// Volume control
volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

// Autoplay next song
audio.addEventListener("ended", () => {
    nextBtn.click();
});

// Playlist
function createPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerText = song.title + " - " + song.artist;
        li.addEventListener("click", () => {
            songIndex = index;
            loadSong(songs[songIndex]);
            audio.play();
            playBtn.innerText = "⏸️";
        });
        playlistEl.appendChild(li);
    });
}

createPlaylist();





