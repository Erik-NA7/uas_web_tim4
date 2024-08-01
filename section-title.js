window.onload = () => {
  let sectionTitle = document.getElementById('active-section');
  const sections = document.querySelectorAll('section');

  console.log(sections.length);
  function getActiveSection() {
    let visibleSection = null
    sections.forEach((section, index) => {
      const rects = section.getBoundingClientRect();
      if (rects.top < 200 && rects.bottom > 200) {
        visibleSection = section;
      }
    });

    if (visibleSection) {
      sectionTitle.innerHTML = visibleSection.firstElementChild.textContent;
    }
  }

  window.addEventListener('scroll', getActiveSection);
  getActiveSection();
}
