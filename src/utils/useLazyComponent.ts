/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import {FC, lazy, LazyExoticComponent} from "react";

export const useLazyComponent = (
    name: string,
    importer: Promise<Record<string, FC>>
): LazyExoticComponent<FC> =>
    lazy(async () => {
        const component = await importer;
        return { default: component[name] };
    });
