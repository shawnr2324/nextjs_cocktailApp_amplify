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
export declare type GarnishUpdateFormInputValues = {
    name?: string;
};
export declare type GarnishUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GarnishUpdateFormOverridesProps = {
    GarnishUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type GarnishUpdateFormProps = React.PropsWithChildren<{
    overrides?: GarnishUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    garnish?: any;
    onSubmit?: (fields: GarnishUpdateFormInputValues) => GarnishUpdateFormInputValues;
    onSuccess?: (fields: GarnishUpdateFormInputValues) => void;
    onError?: (fields: GarnishUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GarnishUpdateFormInputValues) => GarnishUpdateFormInputValues;
    onValidate?: GarnishUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GarnishUpdateForm(props: GarnishUpdateFormProps): React.ReactElement;
