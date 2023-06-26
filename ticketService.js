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

}
