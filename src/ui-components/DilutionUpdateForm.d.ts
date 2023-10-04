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
export declare type DilutionUpdateFormInputValues = {
    name?: string;
    amount?: number;
    scale?: string;
};
export declare type DilutionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    scale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DilutionUpdateFormOverridesProps = {
    DilutionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    scale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DilutionUpdateFormProps = React.PropsWithChildren<{
    overrides?: DilutionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dilution?: any;
    onSubmit?: (fields: DilutionUpdateFormInputValues) => DilutionUpdateFormInputValues;
    onSuccess?: (fields: DilutionUpdateFormInputValues) => void;
    onError?: (fields: DilutionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DilutionUpdateFormInputValues) => DilutionUpdateFormInputValues;
    onValidate?: DilutionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DilutionUpdateForm(props: DilutionUpdateFormProps): React.ReactElement;
