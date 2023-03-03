import { UseFormRegisterReturn } from "react-hook-form";

export type TNativeElementToOmit = "id" | "name" | keyof UseFormRegisterReturn;
