window.onload = () => {
  let sectionTitle = document.getElementById('active-section');

  const sectionMap = {
    tujuan: 'Tujuan Instruksionl Umum',
    // part_1 : 'Pengenalan Dasar HTML'
  }

  const sections = document.querySelectorAll('section');
  
  function isRead() {
    for (const section of sections) {
      // console.log('section top', section.scrollTop)
      console.log(window.scrollY)
      console.log('section height', section.scrollHeight)
      if (window.scrollY === section.scrollHeight) {
        sectionTitle.innerHTML = sectionMap[section.id];
      }
    }
  }

  // sections.forEach(section => {
    // console.log('window scroll', section.scrollHeight)
    // section.addEventListener('scroll', () => {
      // if (isRead(section)) {
      //   sectionTitle.innerHTML = sectionMap[section.id];
      // }

      // isRead(section)
    // })
  // })

  document.addEventListener('scroll', () => {
    isRead()
  })

  // document.querySelector('article').addEventListener('scroll', () => {
  //   for (const section of sections) {
  //     isRead(section)
  //       // sectionTitle.innerHTML = sectionMap[section.id];
  //   }
  // })
}
