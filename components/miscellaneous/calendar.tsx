'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarToday() {

  const [value, onChange] = useState<Value>(new Date());

  return (

    <main>
      <Calendar onChange={onChange} value={value} />
    </main>
  );
}