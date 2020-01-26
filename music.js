var list = document.getElementById("list");
var audio = null;
var classes = ['button1', 'button2'];
for (var i = 0; i < classes.length; i++) {
    var elements = document.getElementsByClassName(classes[i]);
    for (var j = 0; j < elements.length; j++) {
        elements[j].onclick = function (event) {
            event.preventDefault();
            audio = document.createElement('audio');
            audio.src = './onClick.mp3';
            audio.autoplay = true;
            list.appendChild(audio);
        }

    }
}
var music = document.getElementsByClassName("music")[0];
function play() {
    let player = document.createElement('audio');
    player.src = './onClick.mp3';
    player.autoplay = true;
    player.loop = true;
    player.load();
    list.appendChild(player)
}
music.addEventListener('click', play)