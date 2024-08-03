$(document).ready(function() {
    var playlistData = JSON.parse($('.cue-playlist-data').html());
    var tracks = playlistData.tracks;
    var currentTrack = 0;
    var sound;

    function playTrack(index) {
        if (sound) {
            sound.stop();
        }

        sound = new Howl({
            src: [tracks[index].audioUrl],
            onend: function() {
                currentTrack = (currentTrack + 1) % tracks.length;
                playTrack(currentTrack);
            }
        });

        sound.play();
    }

    $('#play-button').on('click', function() {
        playTrack(currentTrack);
    });
});
