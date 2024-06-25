import { ExpirationCompleteEvent, Publisher, Subjects } from "@zencorp/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}