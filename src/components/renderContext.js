// src/components/renderContext.js

export function renderContext(block) {
    const contextDiv = document.createElement('div');
    contextDiv.className = 'context';

    block.elements.forEach(element => {
        if (element.type === 'image') {
            const img = document.createElement('img');
            img.src = element.image_url;
            img.alt = element.alt_text;
            contextDiv.appendChild(img);
        } else if (element.type === 'mrkdwn') {
            const textNode = document.createElement('span');
            textNode.innerHTML = element.text;
            contextDiv.appendChild(textNode);
        }
    });

    return contextDiv;
}
