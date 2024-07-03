import { ReactNode, useEffect, useState } from "react";

type Popup = {
  visible: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const Popup = ({ visible, onClose, children }: Popup) => {
  const [isShown, setIsShown] = useState(visible);

  useEffect(() => {
    if (visible) {
      setIsShown(true);
    }
  }, [visible]);

  if (!isShown) {
    return null;
  }

  const handleClick = (event: { target: any; currentTarget: any }) => {
    if (event.target === event.currentTarget) {
      onClose && onClose();
      setIsShown(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 bg-gray-800 bg-opacity-80 z-40 flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Popup;
