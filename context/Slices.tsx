import { createContext, FC, useContext } from "react";

export interface Slice<T> {
  id: string;
  data: T;
}

export interface Slices<T> {
  sliceNames: string[];
  slicesData: Slice<T>[];
}

interface SliceContextWrapper {
  value: Slices<any>;
  children: React.ReactNode;
}

const SlicesContext = createContext<Slices<any>>({
  slicesData: [],
  sliceNames: [],
});

export const SliceContextWrapper: FC<SliceContextWrapper> = ({
  value,
  children,
}) => {
  return (
    <SlicesContext.Provider value={value}>{children}</SlicesContext.Provider>
  );
};

export const useSlicesContext = () => {
  return useContext(SlicesContext);
};
