import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  heading: string;
  tagline?: string;
};

function SectionWrapper({ children, className, heading, tagline }: Props) {
  return (
    <div className="pt-10 h-screen flex flex-col items-center justify-center">
      <h3 className="uppercase tracking-[20px] text-gray-500  text-xl sm:text-2xl">
        {heading}
      </h3>
      <div className={className}>{children}</div>
    </div>
  );
}

export default SectionWrapper;
