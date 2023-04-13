import React from 'react';
import { Svg, Path } from 'react-native-svg';

type IconProps = {
  color?: string;
  size?: number;
};

export const HomeIcon: React.FC<IconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
      <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
    </Svg>
  );
};

export const LocationIcon: React.FC<IconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg height={size} viewBox="0 96 960 960" width={size}>
      <Path
        d="M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758Zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Zm270-524Z"
        fill={color}
      />
    </Svg>
  );
};

export const SettingsIcon: React.FC<IconProps> = ({
  color = 'teal',
  size = 40,
}) => {
  return (
    <Svg height={size} viewBox="0 96 960 960" width={size} fill={color}>
      <Path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" />
    </Svg>
  );
};
