import { ReactNode } from "react";
const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="px-4 mx-auto sm:max-w-[604px] md:max-w-[720px] lg:max-w-[992px] xl:max-w-[1220
px] 2xl:max-w-[1256px]"
    >
      {children}
    </div>
  );
};

export default Container;
