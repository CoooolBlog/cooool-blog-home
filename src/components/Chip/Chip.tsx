/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import ChipBase from "@mui/material/Chip";

interface Props {
  item: {
    label: string;
    [key: string]: any;
  };
  className?: string;
  handleClick: (val: any) => void;
}

const Chip = ({ item, handleClick, className }: Props) => {
  return (
    <ChipBase
      className={className}
      onClick={() => {
        handleClick(item);
      }}
      label={item.label}
    ></ChipBase>
  );
};

export default Chip;
