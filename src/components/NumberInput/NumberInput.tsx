import React, {FC} from 'react';
import { Container, Input } from './NumberInputStyled';
interface NumberInput {
  value: number;
  onChange: (value: number) => void;
  float?: boolean;
  allowNegative?: boolean;
}

const NumberInput: FC<NumberInput> = (props) => {
  const { value, onChange, float = false, allowNegative = false} = props;
  return <Container>
    <Input value={value} onChange={(e) => onChange(parseInt(e.currentTarget.value, 10) || 0)} />
  </Container>
}

export default NumberInput;