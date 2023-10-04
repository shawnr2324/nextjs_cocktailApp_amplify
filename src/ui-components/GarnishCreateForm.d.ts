/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GarnishCreateFormInputValues = {
    name?: string;
};
export declare type GarnishCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GarnishCreateFormOverridesProps = {
    GarnishCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type GarnishCreateFormProps = React.PropsWithChildren<{
    overrides?: GarnishCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GarnishCreateFormInputValues) => GarnishCreateFormInputValues;
    onSuccess?: (fields: GarnishCreateFormInputValues) => void;
    onError?: (fields: GarnishCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GarnishCreateFormInputValues) => GarnishCreateFormInputValues;
    onValidate?: GarnishCreateFormValidationValues;
} & React.CSSProperties>;
export default function GarnishCreateForm(props: GarnishCreateFormProps): React.ReactElement;
