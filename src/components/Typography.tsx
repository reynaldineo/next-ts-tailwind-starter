import clsxm from "@/lib/clsxm";
import * as React from "react";

export enum TypographyVariant {
  j1,
  j2,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  s1,
  s2,
  s3,
  s4,
  b1,
  p,
  bt,
  btn,
  c1,
  c2,
}
/**
 * | Variant | Size Class | Font Size | Font Weight |
 * | :------ | :--------- | :-------- | :---------- |
 * | j1      | text-4xl   | 36px      | 700         |
 * | j2      | text-3xl   | 30px      | 700         |
 * | h1      | text-2xl   | 24px      | 600         |
 * | h2      | text-xl    | 20px      | 600         |
 * | h3      | text-lg    | 18px      | 600         |
 * | h4      | text-base  | 16px      | 700         |
 * | h5      | text-base  | 16px      | 600         |
 * | h6      | text-sm    | 14px      | 600         |
 * | s1      | text-lg    | 18px      | 500         |
 * | s2      | text-base  | 16px      | 500         |
 * | s3      | text-sm    | 14px      | 500         |
 * | s4      | text-xs    | 12px      | 500         |
 * | b1      | text-lg    | 18px      | 400         |
 * | b2      | text-base  | 16px      | 400         |
 * | b3      | text-sm    | 14px      | 400         |
 * | c1      | text-xs    | 12px      | 400         |
 * | c2      | -          | 11px      | 400         |
 */

enum FontVariant {
  Inter,
}

enum FontWeight {
  regular,
  medium,
  semibold,
  bold,
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight,
  className,
  font,
  variant = "p",
  ...rest
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || "p";
  return (
    <Component
      className={clsxm(
        "text-black font-serif font-normal",
        //#region  //*=========== Variants ===========
        [
          variant === "j1" && ["text-4xl font-bold"],
          variant === "j2" && ["text-3xl font-bold"],
          variant === "h1" && ["text-2xl font-semibold"],
          variant === "h2" && ["text-xl font-semibold"],
          variant === "h3" && ["text-lg font-semibold"],
          variant === "h4" && ["text-base font-bold"],
          variant === "h5" && ["text-base font-semibold"],
          variant === "h6" && ["text-sm font-semibold"],
          variant === "s1" && ["text-lg font-medium"],
          variant === "s2" && ["text-base font-medium"],
          variant === "s3" && ["text-sm font-medium"],
          variant === "s4" && ["text-xs font-medium"],
          variant === "b1" && ["text-lg"],
          variant === "p" && ["font-primary text-base"],
          variant === "bt" && ["text-sm font-normal"],
          variant === "c1" && ["text-xs"],
          variant === "c2" && ["text-[11px] leading-[14px]"],
        ],
        //#endregion  //*======== Variants ===========
        //#region  //*=========== Font ===========
        [
          //   font === "averta" && ["font-averta"],
          //   font === "inter" && ["font-primary"],
        ],
        //#endregion  //*======== Font ===========
        //#region  //*=========== Weight ===========
        [
          weight === "regular" && "font-normal",
          weight === "medium" && "font-medium",
          weight === "semibold" && "font-semibold",
          weight === "bold" && "font-bold",
        ],
        //#endregion  //*======== Weight ===========

        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
