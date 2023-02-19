import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { Moderator } from "../generated/schema"
import { Moderator as ModeratorEvent } from "../generated/Qrate/Qrate"
import { handleModerator } from "../src/qrate"
import { createModeratorEvent } from "./qrate-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let moderatorAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let subject = "Example string value"
    let approved = "boolean Not implemented"
    let newModeratorEvent = createModeratorEvent(
      moderatorAddress,
      subject,
      approved
    )
    handleModerator(newModeratorEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Moderator created and stored", () => {
    assert.entityCount("Moderator", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Moderator",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "moderatorAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Moderator",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subject",
      "Example string value"
    )
    assert.fieldEquals(
      "Moderator",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "approved",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
