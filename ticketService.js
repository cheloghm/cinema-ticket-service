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

}
