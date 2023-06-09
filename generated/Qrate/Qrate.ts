// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Moderator extends ethereum.Event {
  get params(): Moderator__Params {
    return new Moderator__Params(this);
  }
}

export class Moderator__Params {
  _event: Moderator;

  constructor(event: Moderator) {
    this._event = event;
  }

  get moderatorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get moderator(): ModeratorModeratorStruct {
    return changetype<ModeratorModeratorStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class ModeratorModeratorStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get subject(): string {
    return this[1].toString();
  }

  get proof(): string {
    return this[2].toString();
  }

  get approved(): boolean {
    return this[3].toBoolean();
  }
}

export class Question extends ethereum.Event {
  get params(): Question__Params {
    return new Question__Params(this);
  }
}

export class Question__Params {
  _event: Question;

  constructor(event: Question) {
    this._event = event;
  }

  get quesId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get question(): QuestionQuestionStruct {
    return changetype<QuestionQuestionStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class QuestionQuestionStruct extends ethereum.Tuple {
  get questionString(): string {
    return this[0].toString();
  }

  get subject(): string {
    return this[1].toString();
  }

  get topic(): string {
    return this[2].toString();
  }

  get subTopic(): string {
    return this[3].toString();
  }

  get upvotes(): BigInt {
    return this[4].toBigInt();
  }

  get downvotes(): BigInt {
    return this[5].toBigInt();
  }

  get applicant(): Address {
    return this[6].toAddress();
  }

  get status(): i32 {
    return this[7].toI32();
  }
}

export class Subject extends ethereum.Event {
  get params(): Subject__Params {
    return new Subject__Params(this);
  }
}

export class Subject__Params {
  _event: Subject;

  constructor(event: Subject) {
    this._event = event;
  }

  get subject(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class Qrate__moderatorsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: boolean;

  constructor(value0: string, value1: string, value2: string, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getSubject(): string {
    return this.value1;
  }

  getProof(): string {
    return this.value2;
  }

  getApproved(): boolean {
    return this.value3;
  }
}

export class Qrate__questionsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: BigInt;
  value6: Address;
  value7: i32;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: BigInt,
    value6: Address,
    value7: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    return map;
  }

  getQuestionString(): string {
    return this.value0;
  }

  getSubject(): string {
    return this.value1;
  }

  getTopic(): string {
    return this.value2;
  }

  getSubTopic(): string {
    return this.value3;
  }

  getUpvotes(): BigInt {
    return this.value4;
  }

  getDownvotes(): BigInt {
    return this.value5;
  }

  getApplicant(): Address {
    return this.value6;
  }

  getStatus(): i32 {
    return this.value7;
  }
}

export class Qrate extends ethereum.SmartContract {
  static bind(address: Address): Qrate {
    return new Qrate("Qrate", address);
  }

  chairperson(): Address {
    let result = super.call("chairperson", "chairperson():(address)", []);

    return result[0].toAddress();
  }

  try_chairperson(): ethereum.CallResult<Address> {
    let result = super.tryCall("chairperson", "chairperson():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  minVotes(param0: string): BigInt {
    let result = super.call("minVotes", "minVotes(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_minVotes(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minVotes", "minVotes(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  moderators(param0: Address): Qrate__moderatorsResult {
    let result = super.call(
      "moderators",
      "moderators(address):(string,string,string,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Qrate__moderatorsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBoolean()
    );
  }

  try_moderators(
    param0: Address
  ): ethereum.CallResult<Qrate__moderatorsResult> {
    let result = super.tryCall(
      "moderators",
      "moderators(address):(string,string,string,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Qrate__moderatorsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBoolean()
      )
    );
  }

  questionVoters(param0: Address, param1: BigInt): boolean {
    let result = super.call(
      "questionVoters",
      "questionVoters(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_questionVoters(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "questionVoters",
      "questionVoters(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  questions(param0: BigInt): Qrate__questionsResult {
    let result = super.call(
      "questions",
      "questions(uint256):(string,string,string,string,uint256,uint256,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Qrate__questionsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toI32()
    );
  }

  try_questions(param0: BigInt): ethereum.CallResult<Qrate__questionsResult> {
    let result = super.tryCall(
      "questions",
      "questions(uint256):(string,string,string,string,uint256,uint256,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Qrate__questionsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toI32()
      )
    );
  }

  threshold(param0: string): BigInt {
    let result = super.call("threshold", "threshold(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_threshold(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("threshold", "threshold(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalQuestions(): BigInt {
    let result = super.call("totalQuestions", "totalQuestions():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalQuestions(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalQuestions",
      "totalQuestions():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddQuestionCall extends ethereum.Call {
  get inputs(): AddQuestionCall__Inputs {
    return new AddQuestionCall__Inputs(this);
  }

  get outputs(): AddQuestionCall__Outputs {
    return new AddQuestionCall__Outputs(this);
  }
}

export class AddQuestionCall__Inputs {
  _call: AddQuestionCall;

  constructor(call: AddQuestionCall) {
    this._call = call;
  }

  get _questionString(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _subject(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _topic(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _subTopic(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class AddQuestionCall__Outputs {
  _call: AddQuestionCall;

  constructor(call: AddQuestionCall) {
    this._call = call;
  }
}

export class ApplyAsModeratorCall extends ethereum.Call {
  get inputs(): ApplyAsModeratorCall__Inputs {
    return new ApplyAsModeratorCall__Inputs(this);
  }

  get outputs(): ApplyAsModeratorCall__Outputs {
    return new ApplyAsModeratorCall__Outputs(this);
  }
}

export class ApplyAsModeratorCall__Inputs {
  _call: ApplyAsModeratorCall;

  constructor(call: ApplyAsModeratorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _subject(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _proof(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ApplyAsModeratorCall__Outputs {
  _call: ApplyAsModeratorCall;

  constructor(call: ApplyAsModeratorCall) {
    this._call = call;
  }
}

export class ChangeModeratorStatusCall extends ethereum.Call {
  get inputs(): ChangeModeratorStatusCall__Inputs {
    return new ChangeModeratorStatusCall__Inputs(this);
  }

  get outputs(): ChangeModeratorStatusCall__Outputs {
    return new ChangeModeratorStatusCall__Outputs(this);
  }
}

export class ChangeModeratorStatusCall__Inputs {
  _call: ChangeModeratorStatusCall;

  constructor(call: ChangeModeratorStatusCall) {
    this._call = call;
  }

  get _moderator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeModeratorStatusCall__Outputs {
  _call: ChangeModeratorStatusCall;

  constructor(call: ChangeModeratorStatusCall) {
    this._call = call;
  }
}

export class SetThresholdAndMinVotesCall extends ethereum.Call {
  get inputs(): SetThresholdAndMinVotesCall__Inputs {
    return new SetThresholdAndMinVotesCall__Inputs(this);
  }

  get outputs(): SetThresholdAndMinVotesCall__Outputs {
    return new SetThresholdAndMinVotesCall__Outputs(this);
  }
}

export class SetThresholdAndMinVotesCall__Inputs {
  _call: SetThresholdAndMinVotesCall;

  constructor(call: SetThresholdAndMinVotesCall) {
    this._call = call;
  }

  get _subject(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _threshold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minVotes(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetThresholdAndMinVotesCall__Outputs {
  _call: SetThresholdAndMinVotesCall;

  constructor(call: SetThresholdAndMinVotesCall) {
    this._call = call;
  }
}

export class UpdateQuestionCall extends ethereum.Call {
  get inputs(): UpdateQuestionCall__Inputs {
    return new UpdateQuestionCall__Inputs(this);
  }

  get outputs(): UpdateQuestionCall__Outputs {
    return new UpdateQuestionCall__Outputs(this);
  }
}

export class UpdateQuestionCall__Inputs {
  _call: UpdateQuestionCall;

  constructor(call: UpdateQuestionCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _vote(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateQuestionCall__Outputs {
  _call: UpdateQuestionCall;

  constructor(call: UpdateQuestionCall) {
    this._call = call;
  }
}
