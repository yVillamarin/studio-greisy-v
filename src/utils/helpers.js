export function smoothScroll(e) {
  e.preventDefault()
  const targetId = e.currentTarget.getAttribute('href')
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}