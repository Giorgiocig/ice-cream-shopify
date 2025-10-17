import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormTextFieldRHFProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  formControl: Control<T>;
}

export default function FormTextFieldRHF<T extends FieldValues>({
  name,
  label,
  formControl,
}: FormTextFieldRHFProps<T>) {
  return (
    <Controller
      name={name}
      control={formControl}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Input
            {...field}
            id={name}
            aria-invalid={fieldState.invalid}
            placeholder={`Insert ${label.toLowerCase()}`}
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
