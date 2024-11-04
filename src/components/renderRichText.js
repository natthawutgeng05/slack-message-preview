// src/components/renderRichText.js

export function renderRichText(block) {
    const richTextDiv = document.createElement('div');
    block.elements.forEach(element => {
        if (element.type === 'rich_text_section') {
            element.elements.forEach(textElement => {
                const textNode = document.createElement('span');
                textNode.textContent = textElement.text;
                richTextDiv.appendChild(textNode);
            });
        }
    });
    return richTextDiv;
}
