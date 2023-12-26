import { forwardRef } from "react";
import { Box } from "@mui/material";

const ASSET_PATH = "/icons/";

// eslint-disable-next-line react/display-name
const IconSVG = forwardRef(({ name, imgSvg, sx, size = 24, ...other }, ref) =>
  imgSvg ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${ASSET_PATH}${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={size}
    />
  ) : (
    <Box
      component="span"
      ref={ref}
      sx={{
        width: size,
        height: size,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${ASSET_PATH}${name}.svg) no-repeat center / contain`,
        WebkitMask: `url(${ASSET_PATH}${name}.svg) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);

export default IconSVG;
