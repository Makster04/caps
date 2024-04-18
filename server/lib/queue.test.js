// server/lib/queue.test.js

const { addMessage, deleteMessage, getAllMessages } = require('./queue');

describe('Queue Module Tests', () => {
    let messageQueue;

    beforeEach(() => {
        messageQueue = {};
    });

    test('Add message to queue', () => {
        addMessage('acme-widgets', 'pickup', '123', { orderId: '456', item: 'Widget' });
        expect(messageQueue['acme-widgets']['pickup']).toHaveLength(1); // Ensure the queue is updated
        expect(messageQueue['acme-widgets']['pickup'][0]).toEqual({ messageId: '123', payload: { orderId: '456', item: 'Widget' } });
    });

    test('Delete message from queue', () => {
        addMessage('acme-widgets', 'pickup', '123', { orderId: '456', item: 'Widget' });
        deleteMessage('acme-widgets', 'pickup', '123');
        expect(messageQueue['acme-widgets']['pickup']).toHaveLength(0); // Ensure the message is removed from the queue
    });

    test('Get all messages from queue', () => {
        addMessage('acme-widgets', 'pickup', '123', { orderId: '456', item: 'Widget' });
        const messages = getAllMessages('acme-widgets', 'pickup');
        expect(messages).toHaveLength(1); // Ensure the correct number of messages are retrieved
        expect(messages[0]).toEqual({ messageId: '123', payload: { orderId: '456', item: 'Widget' } });
    });

    test('Get all messages from empty queue', () => {
        const messages = getAllMessages('acme-widgets', 'pickup');
        expect(messages).toHaveLength(0); // Ensure no messages are retrieved from an empty queue
    });
});
