// src/index.js
import { renderSection } from './components/renderSection';
import { renderDivider } from './components/renderDivider';
import { renderImage } from './components/renderImage';
import { renderActions } from './components/renderActions';
import { renderContext } from './components/renderContext';
import { renderConversationsSelect } from './components/renderConversationsSelect';
import { renderRichText } from './components/renderRichText';
import { renderHeader } from './components/renderHeader';
import { renderInput } from './components/renderInput';
import { renderOverflow } from './components/renderOverflow';

// Map block types to corresponding render functions
const renderFunctions = {
    section: renderSection,
    divider: renderDivider,
    image: renderImage,
    actions: renderActions,
    context: renderContext,
    conversations_select: renderConversationsSelect,
    rich_text: renderRichText,
    header: renderHeader,
    input: renderInput,
    overflow: renderOverflow
};

// Main function to render a preview of the blocks
export function renderPreview(blocks) {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'message-preview';

    blocks.forEach(block => {
        const renderFunction = renderFunctions[block.type];
        if (renderFunction) {
            const renderedBlock = renderFunction(block);
            previewContainer.appendChild(renderedBlock);
        } else {
            console.warn(`No render function for block type: ${block.type}`);
        }
    });

    return previewContainer;
}
