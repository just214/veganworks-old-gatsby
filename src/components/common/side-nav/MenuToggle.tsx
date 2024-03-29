import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#c711fc"
    strokeLinecap="round"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

const path1Variants = {
  closed: { d: "M 2 2.5 L 20 2.5" },
  open: { d: "M 3 16.5 L 17 2.5" },
};

const path2Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const path3Variants = {
  closed: { d: "M 2 16.346 L 20 16.346" },
  open: { d: "M 3 2.5 L 17 16.346" },
};

export const MenuToggle: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <Button onClick={toggle} aria-label="Menu Toggle">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path variants={path1Variants} />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={path2Variants}
        transition={{ duration: 0.1 }}
      />
      <Path variants={path3Variants} />
    </svg>
  </Button>
);
