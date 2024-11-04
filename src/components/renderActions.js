// src/components/renderActions.js

export function renderActions(block) {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    block.elements.forEach(element => {
        if (element.type === 'button') {
            const button = document.createElement('button');
            button.innerHTML = element.text.text;
            button.className = element.style || '';
            button.onclick = () => alert(`Button clicked: ${element.text.text}`);
            actionsDiv.appendChild(button);
        }
    });

    return actionsDiv;
}
