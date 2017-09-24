var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

var dataImageUrl = '';
var tacoCatUrl = 'https://cdn.dribbble.com/users/977419/screenshots/3279713/tacocat1-fat.jpg';
var random = 0;
var thumbnails = [];

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (thumb.getAttribute('data-image-url') == tacoCatUrl) {
      thumb.setAttribute('data-image-url', dataImageUrl);

      setTacoCatArray();
    }
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);

  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  setTacoCatArray();
  thumbnails.forEach(addThumbClickHandler);
}

function setTacoCatArray() {
  thumbnails = getThumbnailsArray();
  random = Math.floor(Math.random() * 5);

  dataImageUrl = thumbnails[random].getAttribute('data-image-url');
  thumbnails[random].setAttribute('data-image-url', tacoCatUrl);
}
initializeEvents();
