import dumbbellIcon from '../assets/icons/dumbbell-icon.svg';
import bgTier from '../assets/bg-tier.png';

export default function UserTier() {
  return (
    <div
      className="absolute z-10 top-16 right-0 p-2 rounded-md text-white "
      style={{
        backgroundImage: `url(${bgTier})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <p className="font-thin text-center text-xs">Your Tier</p>
      <p className="font-bold flex gap-2">
        <span>
          <img src={dumbbellIcon} alt="" />
        </span>
        Pro Member
      </p>
    </div>
  );
}
