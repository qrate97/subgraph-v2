import {
  Moderator as ModeratorEvent,
  Question as QuestionEvent
} from "../generated/Qrate/Qrate"
import { Moderator, Question } from "../generated/schema"

export function handleModerator(event: ModeratorEvent): void {
  let entity = new Moderator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.moderatorAddress = event.params.moderatorAddress
  entity.subject = event.params.subject
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestion(event: QuestionEvent): void {
  let entity = new Question(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.question_mainId = event.params.question.mainId
  entity.question_id = event.params.question.id
  entity.question_question_string = event.params.question.question_string
  entity.question_subject = event.params.question.subject
  entity.question_topic = event.params.question.topic
  entity.question_subTopic = event.params.question.subTopic
  entity.question_upvotes = event.params.question.upvotes
  entity.question_downvotes = event.params.question.downvotes
  entity.question_applicant = event.params.question.applicant
  entity.question_status = event.params.question.status
  entity.question_incentives = event.params.question.incentives

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
