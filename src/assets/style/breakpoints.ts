/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import facepaint from "facepaint";

// const breakpoints = [576, 768, 992, 1200];

const breakpoints: { [index: string]: number } = {
  sm: 600,
  md: 768,
  lg: 992,
  xl: 1200,
};
export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });
