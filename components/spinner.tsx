import React from "react";

interface SpinnerProps {
  size?: number;
  thickness?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 28,
  thickness = 4,
}) => {
  return (
    <div
      className="animate-spin rounded-full border-t-primary"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderStyle: "solid",
        borderLeftColor: "#256D2A",
        borderRightColor: "#256D2A",
        borderBottomColor: "#256D2A",
      }}
    ></div>
  );
};
