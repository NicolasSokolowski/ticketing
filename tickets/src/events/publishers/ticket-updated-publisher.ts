import { Publisher, Subjects, TicketUpdatedEvent } from "@zencorp/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}