import {
  Moderator as ModeratorEvent,
  Question as QuestionEvent,
  Subject as SubjectEvent
} from "../generated/Qrate/Qrate"
import { Moderator, Question, Subject } from "../generated/schema"
import { Address } from '@graphprotocol/graph-ts';

const ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

export function handleModerator(event: ModeratorEvent): void {
  const id = event.params.moderatorAddress.toHex();
  let entity = Moderator.load(id)
  if(!entity)
    entity = new Moderator(id)
  entity.moderatorAddress = event.params.moderatorAddress.toHexString()
  entity.name = event.params.moderator.name
  entity.subject = event.params.moderator.subject
  entity.proof = event.params.moderator.proof
  entity.approved = event.params.moderator.approved
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleQuestion(event: QuestionEvent): void {
  const id = event.params.quesId.toHex();
  let entity = Question.load(id);
  if(!entity)
    entity = new Question(id)
  entity.quesId = event.params.quesId
  entity.questionString = event.params.question.questionString
  entity.subject = event.params.question.subject
  entity.topic = event.params.question.topic
  entity.subTopic = event.params.question.subTopic
  entity.upvotes = event.params.question.upvotes
  entity.downvotes = event.params.question.downvotes
  entity.applicant = event.params.question.applicant
  entity.status = event.params.question.status
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  if(event.params.sender != ZERO_ADDRESS){
    let voters = entity.voters
    voters.push(event.params.sender)
    entity.voters = voters
  }
  else{
    entity.voters = []
  }
  //entity.question_voters = event.params.question.voters

  entity.save()
}


export function handleSubject(event: SubjectEvent): void {
  const id = event.params.subject.toString();
  let entity = Subject.load(id);
  if(!entity){
    entity = new Subject(id)
    entity.subject_name = event.params.subject
    entity.save()
  }
}