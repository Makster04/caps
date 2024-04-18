// lib/queue.js

let messageQueue = {};

function addMessage(clientId, event, messageId, payload) {
    if (!messageQueue[clientId]) {
        messageQueue[clientId] = {};
    }
    if (!messageQueue[clientId][event]) {
        messageQueue[clientId][event] = [];
    }
    messageQueue[clientId][event].push({ messageId, payload });
}

function deleteMessage(clientId, event, messageId) {
    if (messageQueue[clientId] && messageQueue[clientId][event]) {
        messageQueue[clientId][event] = messageQueue[clientId][event].filter(msg => msg.messageId !== messageId);
    }
}

function getAllMessages(clientId, event) {
    return messageQueue[clientId] && messageQueue[clientId][event] ? messageQueue[clientId][event] : [];
}

module.exports = { addMessage, deleteMessage, getAllMessages };


