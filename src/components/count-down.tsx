import { useEffect, useState } from 'react';
import { calculateDiff } from '../lib/utils';

type remainingTime = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function CountDown({ date }: { date: Date }) {
  const [timeInMs, setTimeInMs] = useState<number>(date.getTime());
  const [remainingTime, setRemainingTime] = useState<
    remainingTime | undefined
  >();

  useEffect(() => {
    setTimeInMs(date.getTime());
  }, [date]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeInMs]);

  const updateRemainingTime = (timeInMs: number) => {
    setRemainingTime(calculateDiff(timeInMs));
  };

  return (
    <div className="flex items-center gap-2 flashsale">
      <span>{remainingTime?.days}d</span>
      <b>:</b>
      <span>{remainingTime?.hours}h</span>
      <b>:</b>
      <span>{remainingTime?.minutes}m</span>
      <b>:</b>
      <span>{remainingTime?.seconds}s</span>
    </div>
  );
}
