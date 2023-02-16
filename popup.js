document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('a');
  const dialog = document.querySelector('p');
  const query = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    const links = [
      'https://leetcode.com/',
      'https://csx.codesmith.io/',
      'https://www.codewars.com/',
      'https://www.freecodecamp.org/learn/coding-interview-prep/',
      'https://www.structy.net/',
      'https://www.patterns.dev/'
    ]

    // for (const link of links) {
    // text.innerHTML = `<a id="text" href="${links[Math.floor(Math.random() * links.length)]}">work</a>`
    const anchor = document.querySelector('a');
    anchor.setAttribute('href', `${links[Math.floor(Math.random() * links.length)]}`)

    dialog.innerHTML = `What are you doing on ${tabs[0].title}?`
    // }

    // const container = document.getElementById('container');
    // container.appendChild(anchor);

    const location = anchor.getAttribute('href');
    anchor.addEventListener('click', () => chrome.tabs.create({ active: true, url: location }));
  });


});

