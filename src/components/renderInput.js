// src/components/renderInput.js

export function renderInput(block) {
    const inputDiv = document.createElement('div');
    const label = document.createElement('label');
    label.innerHTML = block.label.text;
    inputDiv.appendChild(label);

    if (block.element.type === 'checkboxes') {
        block.element.options.forEach(option => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = option.value;
            const checkboxLabel = document.createElement('span');
            checkboxLabel.textContent = option.text.text;
            inputDiv.appendChild(checkbox);
            inputDiv.appendChild(checkboxLabel);
        });
    } else if (block.element.type === 'datepicker') {
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.value = block.element.initial_date || '';
        dateInput.placeholder = block.element.placeholder.text;
        inputDiv.appendChild(dateInput);
    }

    return inputDiv;
}
