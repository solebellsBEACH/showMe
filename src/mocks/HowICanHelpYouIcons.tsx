import React from 'react';
import { MdShutterSpeed, MdRocketLaunch } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { HowICanHelpYouIconsEnum } from '../interface/enums';

export const HowICanHelpYouIcons = (label: HowICanHelpYouIconsEnum) => {
  switch (label) {
    case HowICanHelpYouIconsEnum.speed:
      return <MdShutterSpeed size={60} />;
    case HowICanHelpYouIconsEnum.experience:
      return <BiCodeBlock size={60} />;
    case HowICanHelpYouIconsEnum.highPerformace:
      return <MdRocketLaunch size={60} />;
  }
};
