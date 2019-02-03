import React from 'react';
import { Box, RadioButton } from 'grommet';

const RadioButtonGroup = ({ name, onChange, options, value }) => (
  <Box gap="small">
    {options.map(option => (
      <Box key={option.value}>
        <RadioButton
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => onChange({ value: option.value })}
        />
      </Box>
    ))}
  </Box>
);

export default RadioButtonGroup;