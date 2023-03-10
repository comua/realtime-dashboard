import React from 'react'

export const OdenLogoIcon = ({ size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="-0.013 -0.023 101.676 101.676">
      <defs>
        <linearGradient
          id="logo_svg__linear-gradient"
          x1="97.25"
          y1="86.89"
          x2="10.02"
          y2="86.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#172739"></stop>
          <stop offset="1" stop-color="#00818b"></stop>
        </linearGradient>
        <linearGradient
          id="logo_svg__linear-gradient-2"
          x1="111.66"
          y1="65.32"
          x2="24.75"
          y2="65.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#00818b"></stop>
          <stop offset="1" stop-color="#172739"></stop>
        </linearGradient>
        <linearGradient
          id="logo_svg__linear-gradient-3"
          x1="61.01"
          y1="95.3"
          x2="61.01"
          y2="59.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#172739"></stop>
          <stop offset="0.01" stop-color="#162b3d"></stop>
          <stop offset="0.08" stop-color="#0f4655"></stop>
          <stop offset="0.16" stop-color="#0a5c69"></stop>
          <stop offset="0.26" stop-color="#056d78"></stop>
          <stop offset="0.38" stop-color="#027883"></stop>
          <stop offset="0.54" stop-color="#007f89"></stop>
          <stop offset="1" stop-color="#00818b"></stop>
        </linearGradient>
        <style></style>
      </defs>
      <g id="logo_svg__diamond">
        <path
          d="M16.44 91.56a21.89 21.89 0 010-31l13.71-13.68c-1.11 1.38-12.3 16 1.22 29.47l14.2 14.2a21.9 21.9 0 0031 0l14.2-14.22c13.92 13.92 1.18 28.47.65 29.06l-15.1 15.09a21.89 21.89 0 01-31 0z"
          transform="translate(-10.02 -25.26)"
          fill="url(#logo_svg__linear-gradient)"
        ></path>
        <path
          d="M31.37 76.34C17.86 62.83 29 48.26 30.15 46.88l15.21-15.21a21.89 21.89 0 0131 0l28.89 28.93a21.89 21.89 0 010 31l-13.83 13.79c.53-.59 13.27-15.14-.65-29.06l-14.2-14.2a21.9 21.9 0 00-31 0z"
          transform="translate(-10.02 -25.26)"
          fill="url(#logo_svg__linear-gradient-2)"
        ></path>
        <path
          d="M61 65.65a10.69 10.69 0 1010.7 10.69A10.69 10.69 0 0061 65.65zM61 80a3.7 3.7 0 113.7-3.7A3.7 3.7 0 0161 80z"
          transform="translate(-10.02 -25.26)"
          fill="url(#logo_svg__linear-gradient-3)"
        ></path>
      </g>
    </svg>
  )
}
