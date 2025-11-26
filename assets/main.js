document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightbox-img')

  function openLightbox (src) {
    lightboxImg.src = src
    lightbox.style.display = 'flex'
    document.body.classList.add('js-no-scroll')
  }

  function closeLightbox () {
    lightbox.style.display = 'none'
    lightboxImg.src = ''
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
