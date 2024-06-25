import { Publisher, Subjects, TicketCreatedEvent } from "@zencorp/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}