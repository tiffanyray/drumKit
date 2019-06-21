const playSound = ({ keyCode }) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) {
        return
    }
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
}

const removeTransition = (e) => e.target.classList.remove('playing');

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('animationend', removeTransition))

window.addEventListener("keydown", playSound);