import { useEffect, useState } from 'react';
import { calculateDiff } from '../lib/utils';

export default function CountDown({ date }: { date: Date }) {
  const [timeInMs, setTimeInMs] = useState<number>(date.getTime());
  const [remainingTime, setRemainingTime] = useState<
    { hours: string; minutes: string; seconds: string } | undefined
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
      <span>
        {remainingTime?.hours.slice(0, 1)}
        {remainingTime?.hours.slice(1, 2)}
      </span>
      <b>:</b>
      <span>
        {remainingTime?.minutes.slice(0, 1)}
        {remainingTime?.minutes.slice(1, 2)}
      </span>

      <b>:</b>
      <span>
        {remainingTime?.seconds.slice(0, 1)}
        {remainingTime?.seconds.slice(1, 2)}
      </span>
    </div>
  );
}
