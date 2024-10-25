import { motion } from "framer-motion";
import PropTypes from "prop-types";

const InviteDashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden font-sans">
      <div className="shadow-lg w-full max-w-[500px] rounded-[24px] max-h-[90vh] overflow-hidden flex flex-col bg-white">
        <div className="bg-gradient-to-b from-sky-100 to-white w-full !rounded-t-[24px] !max-h-[90vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4 pt-6"
          >
            <img src="/assets/link.svg" alt="link icon" className="w-24 h-24" />
          </motion.div>
          <h1 className="text-center text-[22px] font-semibold mb-2">
            Invite People to Your Dashboard
          </h1>
          <p className="text-[#6B7280] text-center text-sm m-4">
            Share your file with others to collect feedback, collaborate,
            facilitate ideas and enhance communications.
          </p>
        </div>
        <div className="flex flex-row justify-between mb-4 space-x-2 bg-white p-6 pt-4">
          <div className="relative flex items-center w-full">
            <input
              type="email"
              placeholder="Enter email address"
              className="border border-[#E5E7EB] p-2 rounded-lg !placeholder:align-center text-xs pr-20 w-full"
            />
            <select
              className="absolute right-[4px] top-[3px] p-[5px] border-none text-xs bg-[#F3F4F6] font-medium rounded-lg w-24 h-[28px] text-center appearance-none pr-8"
              style={{
                backgroundImage: "url('/assets/selector.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "90%",
                backgroundPositionY: "center",
                backgroundSize: "10px",
              }}
            >
              <option>Can edit</option>
            </select>
          </div>
          <button className="text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap bg-custom-gradient">
            <span className="block sm:hidden">Send</span>
            <span className="hidden sm:block bg-custom-gradient">
              Send Invitations
            </span>
          </button>
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[35vh] bg-white px-6">
          <UserItem
            name="Julia Chang"
            role="Product Lead"
            roleColor="#3B82F6"
            email="juliachang@cadence.pro"
            permission="Owner"
            avatar="/assets/first.svg"
            emailColor="#9CA3AF"
          />
          <UserItem
            name="Pricilia Chen"
            role="Designer"
            roleColor="#EC4899"
            email="pricilia@cadence.pro"
            permission="Can edit"
            avatar="/assets/second.svg"
            emailColor="#9CA3AF"
          />
          <UserItem
            name="Kevin Lim"
            role="Front End Engineer"
            roleColor="#6366F1"
            email="kevin@cadence.pro"
            permission="View only"
            avatar="/assets/third.svg"
            emailColor="#9CA3AF"
          />
          <UserItem
            name="Andrew Guo"
            role="Back End Engineer"
            roleColor="#F97316"
            email="andrew@cadence.pro"
            permission="View only"
            avatar="/assets/fourth.svg"
            emailColor="#9CA3AF"
          />
          <UserItem
            name="Katherine Lou"
            role="Data Analyst"
            roleColor="#EF4444"
            email="katherine@cadence.pro"
            permission="View only"
            avatar="/assets/fifth.svg"
            emailColor="#9CA3AF"
            withDivider
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-white">
          <label className="flex items-center space-x-1 text-xs">
            <img src="/assets/Lock.svg" className="w-[16px] h-[16px]" />
            <span>Only people with access can view</span>
            <img src="/assets/ArrowDown.svg" className="w-[16px] h-[16px]" />
          </label>
          <button className="flex items-center gap-[3px] color-black pl-2 pr-2 pt-1 pb-1 border border-black rounded-lg font-medium text-xs">
            <img src="/assets/switch.svg" className="w-[16px] h-[16px]" />
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

const UserItem = ({
  name,
  role,
  email,
  permission,
  avatar,
  emailColor,
  roleColor,
  withDivider,
}) => {
  return (
    <div
      className={`flex items-center font-sans ${
        withDivider ? "border-b border-gray-200 pb-3" : ""
      }`}
    >
      <div className="relative flex items-center">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-[40px] h-[40px] rounded-full"
        />
        <img
          src="/assets/SealCheck.svg"
          alt="verified checkmark"
          className="w-4 h-4 absolute bottom-1 right-1 translate-x-2 translate-y-1"
        />
      </div>
      <div className="flex flex-col ml-2">
        <h4 className="font-medium text-[13px] text-[#1F2937]">{name}</h4>
        <div className="flex flex-row space-x-2 justify-start">
          <p className="text-[12px] font-medium" style={{ color: roleColor }}>
            {role}
          </p>
          <img src="/assets/dot.svg" />
          <p
            className="text-[12px] font-light ml-1"
            style={{ color: emailColor }}
          >
            {email}
          </p>
        </div>
      </div>
      <div className="ml-auto">
        <select
          className="border-none p-1 text-xs bg-[#F3F4F6] font-medium rounded-lg w-24 h-[28px] text-center appearance-none pr-8"
          style={{
            backgroundImage: "url('/assets/selector.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "85%",
            backgroundPositionY: "center",
            backgroundSize: "10px",
          }}
        >
          <option>{permission}</option>
          <option>Can edit</option>
          <option>View only</option>
        </select>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  permission: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  emailColor: PropTypes.string.isRequired,
  roleColor: PropTypes.string.isRequired,
  withDivider: PropTypes.bool,
};

export default InviteDashboard;
