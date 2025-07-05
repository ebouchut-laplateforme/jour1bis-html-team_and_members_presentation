// cv.js

// ~~~~~ Update links to open in a new window
//
//  - Once the page is loaded, update all links (a tags) with the `open-new-window` class:
//  - to open in a new window/tab (`target="_blank"`),
//  - Prevent scripts in this newly opened window from manipulating the opener page
//   and receiving the referrer URL (`rel="noopener noreferrer"`).
//
// This is belt-and-suspenders for 🦕 Web browsers.
// This behavior is now the default in the latest version of modern Web browsers.
//
// Sources:
//  - https://caniuse.com/mdn-html_elements_a_rel_noopener
//  - https://caniuse.com/mdn-html_elements_a_rel_noreferrer


window.addEventListener("load", () => { // Once the page is loaded

  document.querySelectorAll('a.open-new-window').forEach(link => { // iterate over these links
    // Add the 2 aforementioned attributes
    link.setAttribute('target', '_blank');
    link.setAttribute('rel',    'noopener noreferrer');
  });

});
