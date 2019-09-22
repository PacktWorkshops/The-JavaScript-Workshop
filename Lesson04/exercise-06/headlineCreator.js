// headlineCreator.js
window.headlineCreator = (function() {
  function createHeadline(text, parentElementSelector = '#root') {
    const parentElement = document.querySelector(parentElementSelector);

    if (!text) {
      throw new Error('You forgot to pass the "text" parameter');
    }

    if (!parentElement) {
      throw new Error(
        `There was no node found for the Selector: "${parentElementSelector}"`
      );
    }

    const headlineToInsert = document.createElement('h1');

    headlineToInsert.innerText = text;
    parentElement.appendChild(headlineToInsert);

    return headlineToInsert;
  }

  return {
    createHeadline: createHeadline
  };
})();
