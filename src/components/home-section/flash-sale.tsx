import flashIcon from '../../assets/icons/flash-icon.svg';

import CountDown from '../count-down';

export default function FlashSale() {
  return (
    <div className="w-full bg-red-600 px-4 py-2 flex items-center justify-between">
      <p className="italic font-bold text-white text-lg flex gap-2 items-center">
        Flash Sale
        <span className="">
          <img src={flashIcon} alt="flash sale icon" />
        </span>
      </p>
      <CountDown date={new Date('2024-08-31T00:00:00+07:00')} />
    </div>
  );
}
