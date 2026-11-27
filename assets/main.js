document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')
  const lightboxDate = document.getElementById('lightbox-date')

  if (!lightbox || !lightboxImg) return

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

  function openLightbox (src) {
    lightboxImg.src = src
    if (lightboxDate) lightboxDate.textContent = dateFromSrc(src)
    lightbox.style.display = 'flex'
    document.body.classList.add('js-no-scroll')
  }

  function closeLightbox () {
    lightbox.style.display = 'none'
    lightboxImg.src = ''
    if (lightboxDate) lightboxDate.textContent = ''
    document.body.classList.remove('js-no-scroll')
  }

  document.querySelectorAll('.js-thumb').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.dataset.full)
    })
  })

  lightbox.addEventListener('click', closeLightbox)

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  })
})
