const envelope = document.getElementById('envelope');
const videoWrap = document.getElementById('videoWrap');
const video = document.getElementById('birthdayVideo');

let opened = false;
let dodgeCount = 0;

const clearDodges = () => {
  envelope.classList.remove('dodge-left', 'dodge-right');
};

envelope.addEventListener('click', () => {
  if (opened) return;

  if (dodgeCount < 2) {
    clearDodges();
    envelope.classList.add(dodgeCount % 2 === 0 ? 'dodge-left' : 'dodge-right');
    dodgeCount += 1;

    setTimeout(() => {
      clearDodges();
    }, 350);

    return;
  }

  opened = true;
  clearDodges();
  envelope.classList.add('open');

  setTimeout(() => {
    envelope.classList.add('hidden');
    videoWrap.classList.add('show');
    videoWrap.setAttribute('aria-hidden', 'false');
    video.play().catch(() => {
      // If autoplay is blocked, user can tap the video.
    });
  }, 900);
});
