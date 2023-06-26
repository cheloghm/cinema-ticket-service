let ticketService;

beforeEach(() => {
    ticketService = new TicketService();
});

const TicketService = require('./ticketService');

test('validatePurchaseRequest should return false for more than 20 tickets', () => {
    expect(ticketService.validatePurchaseRequest(10, 10, 1)).toBe(false);
});

test('validatePurchaseRequest should return false for child or infant tickets without adult tickets', () => {
    expect(ticketService.validatePurchaseRequest(0, 1, 0)).toBe(false);
});

test('calculateTotalPrice should return correct total price', () => {
    expect(ticketService.calculateTotalPrice(2, 2, 2)).toBe(60);
});

test('calculateSeatsToReserve should return correct number of seats', () => {
    expect(ticketService.calculateSeatsToReserve(2, 2, 2)).toBe(4);
});
