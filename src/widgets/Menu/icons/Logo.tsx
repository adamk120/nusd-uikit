import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 30" {...props}>
      <g xmlns="http://www.w3.org/2000/svg" id="surface1">
      {/* <g clip-path="url(#clip1)" clip-rule="nonzero">
      <path fill-opacity="0" d="M 1.828125 0 L 115.054688 0 L 115.054688 36.289062 L 1.828125 36.289062 Z M 1.828125 0 "/>
      <path fill-opacity="0" d="M 1.828125 0 L 115.054688 0 L 115.054688 29.03125 L 1.828125 29.03125 Z M 1.828125 0 "/>
      <path fill-opacity="0" d="M 1.828125 0 L 115.054688 0 L 115.054688 29.03125 L 1.828125 29.03125 Z M 1.828125 0 "/>
      </g>
      <path fill="#227DCF" d="M 18.8125 0.433594 C 17.886719 0.433594 16.972656 0.527344 16.0625 0.707031 C 15.15625 0.886719 14.277344 1.152344 13.421875 1.507812 C 12.570312 1.859375 11.757812 2.292969 10.988281 2.808594 C 10.21875 3.320312 9.507812 3.90625 8.855469 4.558594 C 8.199219 5.214844 7.617188 5.925781 7.101562 6.691406 C 6.589844 7.460938 6.15625 8.273438 5.800781 9.128906 C 5.449219 9.980469 5.179688 10.863281 5 11.769531 C 4.820312 12.675781 4.730469 13.589844 4.730469 14.515625 C 4.730469 15.441406 4.820312 16.355469 5 17.261719 C 5.179688 18.167969 5.449219 19.050781 5.800781 19.90625 C 6.15625 20.757812 6.589844 21.570312 7.101562 22.339844 C 7.617188 23.109375 8.199219 23.820312 8.855469 24.472656 C 9.507812 25.125 10.21875 25.710938 10.988281 26.222656 C 11.757812 26.738281 12.570312 27.171875 13.421875 27.523438 C 14.277344 27.878906 15.15625 28.144531 16.0625 28.328125 C 16.972656 28.507812 17.886719 28.597656 18.8125 28.597656 C 19.734375 28.597656 20.652344 28.507812 21.558594 28.328125 C 22.464844 28.144531 23.34375 27.878906 24.199219 27.523438 C 25.054688 27.171875 25.863281 26.738281 26.632812 26.222656 C 27.402344 25.710938 28.113281 25.125 28.765625 24.472656 C 29.421875 23.820312 30.003906 23.109375 30.519531 22.339844 C 31.03125 21.570312 31.464844 20.757812 31.820312 19.90625 C 32.171875 19.050781 32.441406 18.167969 32.621094 17.261719 C 32.800781 16.355469 32.890625 15.441406 32.890625 14.515625 C 32.890625 13.589844 32.800781 12.675781 32.621094 11.769531 C 32.441406 10.863281 32.171875 9.980469 31.820312 9.128906 C 31.464844 8.273438 31.03125 7.460938 30.519531 6.691406 C 30.003906 5.925781 29.421875 5.214844 28.765625 4.558594 C 28.113281 3.90625 27.402344 3.320312 26.632812 2.808594 C 25.863281 2.292969 25.054688 1.859375 24.199219 1.507812 C 23.34375 1.152344 22.464844 0.886719 21.558594 0.707031 C 20.652344 0.527344 19.734375 0.433594 18.8125 0.433594 Z M 18.8125 0.433594 "/>
      <g clip-path="url(#clip2)" clip-rule="nonzero">
      <path fill="white" d="M 21.84375 7.902344 C 19.816406 8.667969 18.792969 10.929688 19.554688 12.960938 C 19.890625 13.855469 20.542969 14.597656 21.386719 15.046875 L 23.585938 16.210938 C 24.171875 16.523438 24.394531 17.25 24.085938 17.835938 C 23.773438 18.421875 23.046875 18.644531 22.460938 18.335938 C 22.070312 18.128906 21.824219 17.71875 21.824219 17.273438 L 19.105469 17.273438 C 19.105469 18.984375 20.210938 20.5 21.84375 21.015625 L 21.84375 22.660156 L 24.601562 22.660156 L 24.601562 20.867188 C 26.585938 19.992188 27.484375 17.675781 26.613281 15.695312 C 26.257812 14.886719 25.640625 14.21875 24.859375 13.804688 L 22.726562 12.671875 C 22.125 12.398438 21.855469 11.6875 22.128906 11.082031 C 22.402344 10.476562 23.113281 10.210938 23.714844 10.484375 C 24.144531 10.675781 24.421875 11.105469 24.421875 11.578125 L 27.140625 11.578125 C 27.140625 9.945312 26.128906 8.480469 24.601562 7.902344 L 24.601562 6.191406 L 21.84375 6.191406 L 21.84375 7.902344 "/>
      </g>
      <g clip-path="url(#clip3)" clip-rule="nonzero">
      <path fill="white"  d="M 16.28125 18.515625 L 12.503906 18.515625 L 11.949219 6.101562 L 17.03125 6.101562 L 16.28125 18.515625 "/>
      </g>
      <g clip-path="url(#clip4)" clip-rule="nonzero">
      <path fill="white" d="M 16.144531 21.042969 C 16.144531 21.984375 15.335938 22.75 14.332031 22.75 C 13.332031 22.75 12.523438 21.984375 12.523438 21.042969 C 12.523438 20.097656 13.332031 19.332031 14.332031 19.332031 C 15.335938 19.332031 16.144531 20.097656 16.144531 21.042969 "/>
      </g> */}
      <g>
        <use href="#glyph0-1" x="6.773152" y="25.367978">
          <svg overflow="visible" id="glyph0-1">
            <path fill="#227DCF" d="M 6.6875 -7.453125 L 1.921875 -7.453125 L 1.1875 -21.125 L 7.421875 -21.125 Z M 1.25 -2.40625 C 1.25 -3.28125 1.503906 -3.957031 2.015625 -4.4375 C 2.535156 -4.925781 3.296875 -5.171875 4.296875 -5.171875 C 5.273438 -5.171875 6.015625 -4.925781 6.515625 -4.4375 C 7.023438 -3.957031 7.28125 -3.28125 7.28125 -2.40625 C 7.28125 -1.53125 7.015625 -0.847656 6.484375 -0.359375 C 5.960938 0.117188 5.234375 0.359375 4.296875 0.359375 C 3.335938 0.359375 2.585938 0.117188 2.046875 -0.359375 C 1.515625 -0.847656 1.25 -1.53125 1.25 -2.40625 Z M 1.25 -2.40625 "/>      
          </svg>
        </use>
      </g>
      <g>
        <use href="#glyph0-2" x="15.346539" y="25.367978">
          <svg overflow="visible" id="glyph0-2">
            <path fill="#227DCF" d="M 20.25 -21.125 L 20.25 -8.40625 C 20.25 -5.644531 19.460938 -3.503906 17.890625 -1.984375 C 16.328125 -0.472656 14.070312 0.28125 11.125 0.28125 C 8.25 0.28125 6.035156 -0.453125 4.484375 -1.921875 C 2.941406 -3.390625 2.171875 -5.507812 2.171875 -8.28125 L 2.171875 -21.125 L 7.90625 -21.125 L 7.90625 -8.734375 C 7.90625 -7.234375 8.179688 -6.144531 8.734375 -5.46875 C 9.296875 -4.800781 10.125 -4.46875 11.21875 -4.46875 C 12.382812 -4.46875 13.226562 -4.800781 13.75 -5.46875 C 14.269531 -6.132812 14.53125 -7.226562 14.53125 -8.75 L 14.53125 -21.125 Z M 20.25 -21.125 "/>
          </svg>
        </use>    
      </g>
      <g>
        <use href="#glyph0-3" x="37.718712" y="25.367978">
          <svg overflow="visible" id="glyph0-3">      
            <path fill="#227DCF" d="M 16.09375 -6.421875 C 16.09375 -5.109375 15.757812 -3.941406 15.09375 -2.921875 C 14.4375 -1.910156 13.476562 -1.125 12.21875 -0.5625 C 10.96875 0 9.5 0.28125 7.8125 0.28125 C 6.40625 0.28125 5.222656 0.1875 4.265625 0 C 3.316406 -0.195312 2.328125 -0.546875 1.296875 -1.046875 L 1.296875 -6.125 C 2.390625 -5.5625 3.519531 -5.125 4.6875 -4.8125 C 5.863281 -4.5 6.945312 -4.34375 7.9375 -4.34375 C 8.78125 -4.34375 9.398438 -4.488281 9.796875 -4.78125 C 10.191406 -5.082031 10.390625 -5.460938 10.390625 -5.921875 C 10.390625 -6.210938 10.304688 -6.46875 10.140625 -6.6875 C 9.984375 -6.90625 9.726562 -7.125 9.375 -7.34375 C 9.03125 -7.5625 8.097656 -8.015625 6.578125 -8.703125 C 5.203125 -9.328125 4.164062 -9.929688 3.46875 -10.515625 C 2.78125 -11.109375 2.269531 -11.785156 1.9375 -12.546875 C 1.601562 -13.304688 1.4375 -14.207031 1.4375 -15.25 C 1.4375 -17.1875 2.144531 -18.695312 3.5625 -19.78125 C 4.976562 -20.875 6.925781 -21.421875 9.40625 -21.421875 C 11.59375 -21.421875 13.820312 -20.914062 16.09375 -19.90625 L 14.34375 -15.5 C 12.375 -16.40625 10.671875 -16.859375 9.234375 -16.859375 C 8.492188 -16.859375 7.953125 -16.726562 7.609375 -16.46875 C 7.273438 -16.207031 7.109375 -15.882812 7.109375 -15.5 C 7.109375 -15.09375 7.320312 -14.722656 7.75 -14.390625 C 8.175781 -14.066406 9.335938 -13.46875 11.234375 -12.59375 C 13.054688 -11.78125 14.320312 -10.898438 15.03125 -9.953125 C 15.738281 -9.015625 16.09375 -7.835938 16.09375 -6.421875 Z M 16.09375 -6.421875 "/>
          </svg>  
        </use>
      </g>
      <g>
        <use href="#glyph0-4" x="54.778346" y="25.367978">
            <svg overflow="visible" id="glyph0-4">            
              <path fill="#227DCF" d="M 20.21875 -11.015625 C 20.21875 -7.484375 19.242188 -4.765625 17.296875 -2.859375 C 15.359375 -0.953125 12.632812 0 9.125 0 L 2.28125 0 L 2.28125 -21.125 L 9.59375 -21.125 C 12.988281 -21.125 15.609375 -20.253906 17.453125 -18.515625 C 19.296875 -16.785156 20.21875 -14.285156 20.21875 -11.015625 Z M 14.296875 -10.8125 C 14.296875 -12.75 13.910156 -14.179688 13.140625 -15.109375 C 12.378906 -16.046875 11.21875 -16.515625 9.65625 -16.515625 L 7.984375 -16.515625 L 7.984375 -4.6875 L 9.265625 -4.6875 C 10.992188 -4.6875 12.265625 -5.1875 13.078125 -6.1875 C 13.890625 -7.195312 14.296875 -8.738281 14.296875 -10.8125 Z M 14.296875 -10.8125 "/>     
            </svg>
        </use>
      </g>
    </g>
    </Svg>
  );
};

export default Logo;
