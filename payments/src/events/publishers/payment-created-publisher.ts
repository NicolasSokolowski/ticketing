import { PaymentCreatedEvent, Publisher, Subjects } from "@zencorp/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
};