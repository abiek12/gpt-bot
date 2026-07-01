import { UserCircleIcon } from "@phosphor-icons/react/dist/ssr";

const ProfileCard = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="profile-icon">
        <UserCircleIcon size={28} weight="duotone" />
      </div>

      <div className="details">
        <div className="name">Abhishek pp</div>
        <div className="plan">Go</div>
      </div>
    </div>
  );
};

export default ProfileCard;
