export const PROCESS_ID_LENGTH: number = 32

type TokenMetadataKey = string
type TokenId = number
type File = string
type MetadataValue = File | string | TokenId | null

enum MetadataValueType {
  File,
  Literal,
  TokenId,
  None,
}

enum Role {
  Owner,
  Customer,
  AdditiveManufacturer,
  Laboratory,
  Buyer,
  Supplier,
  Reviewer,
}

export type Restrictions = Restriction[]
interface Restriction {
  None?: None
  SenderOwnsAllInputs?: SenderOwnsAllInputs
  SenderHasInputRole?: SenderHasInputRole
  SenderHasOutputRole?: SenderHasOutputRole
  OutputHasRole?: OutputHasRole
  MatchInputOutputRole?: MatchInputOutputRole
  MatchInputOutputMetadataValue?: MatchInputOutputMetadataValue
  FixedNumberOfInputs?: FixedNumberOfInputs
  FixedNumberOfOutputs?: FixedNumberOfOutputs
  FixedInputMetadataValue?: FixedInputMetadataValue
  FixedOutputMetadataValue?: FixedOutputMetadataValue
  FixedOutputMetadataValueType?: FixedOutputMetadataValueType
}

export interface None {}

export interface SenderOwnsAllInputs {}

export interface SenderHasInputRole {
  index: number
  roleKey: Role
}

export interface SenderHasOutputRole {
  index: number
  roleKey: Role
}

export interface OutputHasRole {
  index: number
  roleKey: Role
}

export interface MatchInputOutputRole {
  inputIndex: number
  inputRoleKey: Role
  outputIndex: number
  outputRoleKey: Role
}

export interface MatchInputOutputMetadataValue {
  inputIndex: number
  inputMetadataKey: TokenMetadataKey
  outputIndex: number
  outputMetadataKey: TokenMetadataKey
}

export interface FixedNumberOfInputs {
  numInputs: number
}

export interface FixedNumberOfOutputs {
  numOutputs: number
}

export interface FixedInputMetadataValue {
  index: number
  metadataKey: TokenMetadataKey
  metadataValue: MetadataValue
}

export interface FixedOutputMetadataValue {
  index: number
  metadataKey: TokenMetadataKey
  metadataValue: MetadataValue
}

export interface FixedOutputMetadataValueType {
  index: number
  metadataKey: TokenMetadataKey
  metadataValueType: MetadataValueType
}
