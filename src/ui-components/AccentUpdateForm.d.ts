/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccentUpdateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type AccentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccentUpdateFormOverridesProps = {
    AccentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AccentUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accent?: any;
    onSubmit?: (fields: AccentUpdateFormInputValues) => AccentUpdateFormInputValues;
    onSuccess?: (fields: AccentUpdateFormInputValues) => void;
    onError?: (fields: AccentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccentUpdateFormInputValues) => AccentUpdateFormInputValues;
    onValidate?: AccentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccentUpdateForm(props: AccentUpdateFormProps): React.ReactElement;
