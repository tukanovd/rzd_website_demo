import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Portal = { children: ReactNode; id?: string };

const portalId = "myportal";

const Portal = ({ children, id = portalId }: Portal) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? // @ts-ignore
      createPortal(children, document.querySelector(`#${id}`))
    : null;
};

export default Portal;
