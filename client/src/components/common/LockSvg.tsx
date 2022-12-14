import type { FC } from 'react';

import Lock0Icon from '../../assets/locks/lock0.svg';
import Lock1Icon from '../../assets/locks/lock1.svg';
import Lock2Icon from '../../assets/locks/lock2.svg';
import Lock3Icon from '../../assets/locks/lock3.svg';
import Lock4Icon from '../../assets/locks/lock4.svg';
import Lock5Icon from '../../assets/locks/lock5.svg';
import Lock6Icon from '../../assets/locks/lock6.svg';

interface LockSvgProps {
  type: number;
  width: string | number;
  height: string | number;
  className?: string;
  id?: string;
  style?: { top: string; left: string; opacity?: string };
  onMouseOver?(): void;
  onMouseLeave?(): void;
}
const getLockSvg = (type: number) => {
  if (type === 0) return Lock0Icon;
  if (type === 1) return Lock1Icon;
  if (type === 2) return Lock2Icon;
  if (type === 3) return Lock3Icon;
  if (type === 4) return Lock4Icon;
  if (type === 5) return Lock5Icon;
  if (type === 6) return Lock6Icon;
  return Lock0Icon;
};
const LockSvg: FC<LockSvgProps> = ({ type, ...rest }) => {
  const LockSvg = getLockSvg(type);
  return <LockSvg {...rest} />;
};
export default LockSvg;
