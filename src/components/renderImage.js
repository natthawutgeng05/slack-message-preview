// src/components/renderImage.js

export function renderImage(block) {
    const img = document.createElement('img');
    img.src = block.image_url;
    img.alt = block.alt_text;
    img.style.maxWidth = '100%';
    return img;
}
