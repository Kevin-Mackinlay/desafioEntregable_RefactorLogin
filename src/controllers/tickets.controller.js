export default class Tickets {
    constructor(serv) {
        this.ticketsServ = serv;
    }
    createTicket = async (res, req) => {
        try {
            const newTicket = await this.ticketsServ.create(req.body);
            if (!newTicket) {
                return res.status(400).json({ success: false, error: "Ticket could not be created" });
            }
            return res.status(201).json({ success: true, data: newTicket });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }	

    getTickets = async (res, req) => {
        try {
            const tickets = await this.ticketsServ.getTickets();
            if (!tickets) {
                return res.status(404).json({ success: false, error: "Tickets not found" });
            }
            return res.status(200).json({ success: true, data: tickets });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    getTicketById = async (res, req) => {
        try {
            const { tid } = req.params;
            const ticket = await this.ticketsServ.getTicketById(tid);
            if (!ticket) {
                return res.status(404).json({ success: false, error: "Ticket not found" });
            }
            return res.status(200).json({ success: true, data: ticket });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    updateTicket = async (res, req) => {
        try {
            const { tid } = req.params;
            const updatedTicket = await this.ticketsServ.updateTicket(tid, req.body);
            if (!updatedTicket) {
                return res.status(404).json({ success: false, error: "Ticket not found" });
            }
            return res.status(200).json({ success: true, data: updatedTicket });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    deleteTicket = async (res, req) => {
        try {
            const { tid } = req.params;
            const deletedTicket = await this.ticketsServ.deleteTicket(tid);
            if (!deletedTicket) {
                return res.status(404).json({ success: false, error: "Ticket not found" });
            }
            return res.status(200).json({ success: true, data: deletedTicket });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }
}