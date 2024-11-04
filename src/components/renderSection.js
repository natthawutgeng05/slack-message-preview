// src/components/renderSection.js
import { renderAccessory } from './renderAccessory';

export function renderSection(block) {
    const section = document.createElement('div');
    section.className = 'section';

    if (block.text) {
        const textElement = document.createElement('p');
        textElement.innerHTML = block.text.text;
        section.appendChild(textElement);
    }

    if (block.accessory) {
        const accessoryElement = renderAccessory(block.accessory);
        if (accessoryElement) {
            section.appendChild(accessoryElement);
        }
    }

    if (block.fields && Array.isArray(block.fields)) {
        const fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'fields-container';

        block.fields.forEach(field => {
            const fieldElement = document.createElement('p');
            fieldElement.innerHTML = field.text;
            fieldsContainer.appendChild(fieldElement);
        });

        section.appendChild(fieldsContainer);
    }

    return section;
}
