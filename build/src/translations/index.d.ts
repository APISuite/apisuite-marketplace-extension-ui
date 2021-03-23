import * as React from 'react';
import { Namespace, UseTranslationOptions, UseTranslationResponse, TransProps } from 'react-i18next';
export declare const t: import("i18next").TFunction;
export declare const tCore: import("i18next").TFunction;
export declare const useTranslation: (ns?: Namespace, options?: UseTranslationOptions) => UseTranslationResponse;
export declare const Trans: ({ children, ...props }: TransProps) => React.ReactElement;
