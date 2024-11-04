// src/components/renderAccessory.js
import { renderImage } from './renderImage';
import { renderStaticSelect } from './renderStaticSelect';
import { renderConversationsSelect } from './renderConversationsSelect';
import { renderOverflow } from './renderOverflow';

export function renderAccessory(accessory) {
    if (accessory.type === 'image') {
        return renderImage(accessory);
    } else if (accessory.type === 'button') {
        const button = document.createElement('button');
        button.innerHTML = accessory.text.text;
        button.className = accessory.style || '';
        button.onclick = () => alert(`Button clicked: ${accessory.text.text}`);
        return button;
    } else if (accessory.type === 'static_select') {
        return renderStaticSelect(accessory);
    } else if (accessory.type === 'conversations_select') {
        return renderConversationsSelect(accessory);
    } else if (accessory.type === 'overflow') {
        return renderOverflow(accessory);
    }
    return null;
}
