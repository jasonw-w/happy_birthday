const envelope = document.getElementById('envelope');
const videoWrap = document.getElementById('videoWrap');
const video = document.getElementById('birthdayVideo');

let opened = false;

envelope.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');

  setTimeout(() => {
    videoWrap.classList.add('show');
    videoWrap.setAttribute('aria-hidden', 'false');
    video.play().catch(() => {
      // If autoplay is blocked, user can tap the video.
    });
  }, 900);
});
