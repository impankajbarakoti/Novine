
import {
  FaPlane,
  FaMoneyBillWave,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlane size={36} />,
    text: "FREE SHIPPING WORLD WIDE",
  },
  {
    icon: <FaMoneyBillWave size={36} />,
    text: "100% MONEY BACK GUARANTEE",
  },
  {
    icon: <FaCreditCard size={36} />,
    text: "MANY PAYMENT GATEWAYS",
  },
  {
    icon: <FaHeadset size={36} />,
    text: "24/7 ONLINE SUPPORT",
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div className="max-w-7xl w-full flex flex-wrap justify-center gap-10 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 max-w-xs text-center"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
              <div
                className="transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180"
                style={{ transformStyle: "preserve-3d" }}
              >
                {feature.icon}
              </div>
            </div>
            <p className="text-black text-sm font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;



