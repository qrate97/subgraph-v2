import {
  Moderator as ModeratorEvent,
  Question as QuestionEvent
} from "../generated/Qrate/Qrate"
import { Moderator, Question } from "../generated/schema"

export function handleModerator(event: ModeratorEvent): void {
  const id = event.params.moderatorAddress.toHex();
  let entity = Moderator.load(id)
  if(!entity)
    entity = new Moderator(id)
  entity.moderatorAddress = event.params.moderatorAddress.toString()
  entity.subject = event.params.subject
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestion(event: QuestionEvent): void {
  const id = event.params.question.mainId.toHex();
  let entity = Question.load(id);
  if(!entity)
    entity = new Question(id)
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
