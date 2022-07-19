export const validAll = [
  {
    None: {},
  },
  {
    SenderOwnsAllInputs: {},
  },
  {
    SenderHasInputRole: {
      index: 0,
      role_key: 'Supplier',
    },
  },
  {
    SenderHasOutputRole: {
      index: 0,
      role_key: 'Supplier',
    },
  },
  {
    OutputHasRole: {
      index: 0,
      role_key: 'Supplier',
    },
  },
  {
    MatchInputOutputRole: {
      input_index: 0,
      input_role_key: 'Supplier',
      output_index: 0,
      output_role_key: 'Supplier',
    },
  },
  {
    MatchInputOutputMetadataValue: {
      input_index: 0,
      input_metadata_key: 'SomeMetadataKey',
      output_index: 0,
      output_metadata_key: 'SomeMetadataKey',
    },
  },
  {
    FixedNumberOfInputs: {
      num_inputs: 0,
    },
  },
  {
    FixedNumberOfOutputs: {
      num_outputs: 0,
    },
  },
  {
    FixedInputMetadataValue: {
      index: 0,
      metadata_key: 'SomeMetadataKey',
      metadata_value: '0x',
    },
  },
  {
    FixedOutputMetadataValue: {
      index: 0,
      metadata_key: 'SomeMetadataKey',
      metadata_value: '0x',
    },
  },
  {
    FixedOutputMetadataValueType: {
      index: 0,
      metadata_key: 'SomeMetadataKey',
      metadata_value_type: 'Literal',
    },
  },
]