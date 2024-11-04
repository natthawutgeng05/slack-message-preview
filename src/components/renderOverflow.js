// src/components/renderOverflow.js

export function renderOverflow(block) {
    const overflowMenu = document.createElement('div');
    overflowMenu.className = 'overflow-menu';

    const button = document.createElement('button');
    button.innerHTML = '⋮';
    button.className = 'overflow-button';
    button.onclick = () => {
        const optionsList = document.getElementById('options-list');
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    };

    const optionsList = document.createElement('div');
    optionsList.id = 'options-list';
    optionsList.style.display = 'none';

    block.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerHTML = option.text.text;
        optionButton.onclick = () => alert(`Selected: ${option.text.text}`);
        optionsList.appendChild(optionButton);
    });

    overflowMenu.appendChild(button);
    overflowMenu.appendChild(optionsList);

    return overflowMenu;
}
