document.addEventListener('DOMContentLoaded', () => {
  const dialogBox = document.getElementById('dialog-box');
  const query = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    dialogBox.innerHTML = `What are you doing on ${tabs[0].title}? Get back to <a href="https://leetcode.com/">work</a>!`
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      const location = anchor.getAttribute('href');
      anchor.addEventListener('click', () => chrome.tabs.create({ active: true, url: location }));
    })
  });


});

