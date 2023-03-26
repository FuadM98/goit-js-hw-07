import { galleryItems } from "./gallery-items.js";

const galleryListRef = document.querySelector(".gallery");

galleryListRef.addEventListener("click", onGalleryItemsClick);

const galleryMarkupRef = createGalleryMarkup(galleryItems);

galleryListRef.insertAdjacentHTML("afterbegin", galleryMarkupRef);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
    <img
      class = "gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox
    .create(
      `
    <img src ="${evt.target.dataset.source}" >
    `
    )
    .show();
}
