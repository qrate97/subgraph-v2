import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Moderator, Question } from "../generated/Qrate/Qrate"

export function createModeratorEvent(
  moderatorAddress: Address,
  subject: string,
  approved: boolean
): Moderator {
  let moderatorEvent = changetype<Moderator>(newMockEvent())

  moderatorEvent.parameters = new Array()

  moderatorEvent.parameters.push(
    new ethereum.EventParam(
      "moderatorAddress",
      ethereum.Value.fromAddress(moderatorAddress)
    )
  )
  moderatorEvent.parameters.push(
    new ethereum.EventParam("subject", ethereum.Value.fromString(subject))
  )
  moderatorEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return moderatorEvent
}

export function createQuestionEvent(question: ethereum.Tuple): Question {
  let questionEvent = changetype<Question>(newMockEvent())

  questionEvent.parameters = new Array()

  questionEvent.parameters.push(
    new ethereum.EventParam("question", ethereum.Value.fromTuple(question))
  )

  return questionEvent
}
