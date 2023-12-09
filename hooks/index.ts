import { useHoverDirty, useMedia } from "react-use";
import { RefObject } from "react";

export const useShow = (refEl: RefObject<Element>) => {
  const isHovering = useHoverDirty(refEl);
  const isWide = useMedia("(min-width: 1024px)");

  return isHovering && isWide;
};
