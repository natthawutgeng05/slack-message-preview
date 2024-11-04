// src/components/renderHeader.js

export function renderHeader(block) {
    const header = document.createElement('h3');
    header.innerHTML = block.text.text;
    return header;
}
