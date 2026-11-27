document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const lightboxDate = document.getElementById('lightbox-date')
  const thumbs = Array.from(document.querySelectorAll('.js-thumb'))

  if (!lightbox || !lightboxImg || !thumbs.length) return

  let current = 0
  let open = false

  function dateFromSrc (src) {
    const match = src.match(/(\d{4})-(\d{2})-(\d{2})/)
    if (!match) return ''

    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  function showPhoto (index) {
    const src = thumbs[index].dataset.full
    current = index
    lightboxImg.src = src
    if (lightboxDate) lightboxDate.textContent = dateFromSrc(src)
  }

  function restartFade () {
    lightboxImg.style.animation = 'none'
    void lightboxImg.offsetWidth
    lightboxImg.style.animation = ''
  }

  function openLightbox (index) {
    showPhoto(index)
    open = true
    lightbox.style.display = 'flex'
    document.body.classList.add('js-no-scroll')
  }

  function closeLightbox () {
    open = false
    lightbox.style.display = 'none'
    lightboxImg.src = ''
    if (lightboxDate) lightboxDate.textContent = ''
    document.body.classList.remove('js-no-scroll')
  }

  function step (delta) {
    const next = current + delta
    if (next < 0 || next >= thumbs.length) return
    showPhoto(next)
    restartFade()
  }

  thumbs.forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index)
    })
  })

  lightbox.addEventListener('click', closeLightbox)

  document.addEventListener('keydown', e => {
    if (!open) return

    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      step(1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      step(-1)
    }
  })
})
