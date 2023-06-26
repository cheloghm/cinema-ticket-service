class TicketService {
    constructor() {
        this.ticketPrices = {
            'INFANT': 0,
            'CHILD': 10,
            'ADULT': 20
        };
    }

    calculateTotalPrice(infant, child, adult) {
        return (infant * this.ticketPrices['INFANT']) +
               (child * this.ticketPrices['CHILD']) +
               (adult * this.ticketPrices['ADULT']);
    }

    validatePurchaseRequest(infant, child, adult) {
        const totalTickets = infant + child + adult;

        // A request is invalid if it includes more than 20 tickets
        if (totalTickets > 20) {
            return false;
        }

        // A request is invalid if it includes child or infant tickets without adult tickets
        if ((child > 0 || infant > 0) && adult === 0) {
            return false;
        }

        // A request is invalid if it includes no tickets
        if (totalTickets === 0) {
            return false;
        }

        return true;
    }

    calculateSeatsToReserve(infant, child, adult) {
        // Infant tickets do not require a seat
        return child + adult;
    }

    processPurchase(infant, child, adult) {
        if (!this.validatePurchaseRequest(infant, child, adult)) {
            return 'Invalid purchase request';
        }

        const totalPrice = this.calculateTotalPrice(infant, child, adult);
        const seatsToReserve = this.calculateSeatsToReserve(infant, child, adult);

        // Here, I would have made the actual calls to the TicketPaymentService and SeatReservationService
        // But for this, I'll just simulate that with a console.log
        console.log(`Making a payment request of £${totalPrice} to TicketPaymentService...`);
        console.log(`Making a seat reservation request of ${seatsToReserve} seats to SeatReservationService...`);

        return 'Purchase processed successfully';
    }

}

//Testing the code
const ticketService = new TicketService();
console.log(ticketService.processPurchase(0, 2, 1));  // outputs: 'Purchase processed successfully'
