// src/components/renderConversationsSelect.js

export function renderConversationsSelect(block) {
    const select = document.createElement('select');
    const placeholder = document.createElement('option');
    placeholder.text = block.placeholder.text;
    placeholder.disabled = true;
    placeholder.selected = true;
    select.add(placeholder);

    const conversations = ['Conversation 1', 'Conversation 2', 'Conversation 3'];
    conversations.forEach(convo => {
        const option = document.createElement('option');
        option.value = convo;
        option.text = convo;
        select.add(option);
    });

    return select;
}
