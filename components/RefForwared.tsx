import { forwardRef, ForwardRefRenderFunction } from "react";

const refForwarder = <T, P = {}>(
  WrappedComponent: (props: P) => JSX.Element
) => {
  const withForwardedRef: ForwardRefRenderFunction<T, P> = (props, ref) => (
    <WrappedComponent {...props} forwardedRef={ref} />
  );

  return forwardRef(withForwardedRef);
};

export default refForwarder;
