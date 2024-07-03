import Portal from "../Portal";
import { useToastContext } from "../../context/ToastContext";
import InfoMessage from "../InfoMessage";

const Toast = () => {
  const { message, isShow } = useToastContext();
  const { message: _message, type } = message;

  return isShow ? (
    <Portal>
      <div className="absolute top-2 right-4 w-96 md:w-80 z-50">
        <InfoMessage type={type}>{_message}</InfoMessage>
      </div>
    </Portal>
  ) : null;
};

export default Toast;
