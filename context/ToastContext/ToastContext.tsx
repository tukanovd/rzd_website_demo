import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { debounce } from "@utils";
import {
  ToastMessageType,
  showToastType,
  Toast,
  ToastContextWrapperType,
} from "./types";

const ToastContext = createContext<Toast>({
  message: { message: "", type: "info" },
  isShow: false,
  showToast: () => {},
});

const delay = 3000;

export const ToastContextWrapper: FC<ToastContextWrapperType> = ({
  children,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [_message, setMessage] = useState<ToastMessageType>({
    message: "",
    type: "info",
  });

  const dismissToast = useMemo(() => {
    return debounce(() => setIsShow(false), delay);
  }, [delay]);

  useEffect(() => {
    const { message, type } = _message;
    if (isShow && message && type) {
      dismissToast();
    }
  }, [isShow, _message.message, _message.type, dismissToast]);

  const showToast = useCallback<showToastType>(({ message, type }) => {
    setIsShow(true);
    setMessage({ message, type });
  }, []);

  const value = useMemo<Toast>(
    () => ({ showToast, isShow, message: _message }),
    [showToast, isShow, _message.message, _message.type]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
