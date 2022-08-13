import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useUniqueId(prefix: string) {
  const [uniqueId] = useState(`${prefix}-${uuidv4()}`);
  return uniqueId;
}
