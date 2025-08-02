"use client";

import SandboxLayout from "@/app/sandbox/SandboxLayout";
import clsxm from "@/lib/clsxm";

interface ColorShades {
  [shade: string]: string; // Represents arbitrary shade keys like 50, 100, etc.
}

interface Colors {
  primary: ColorShades;
  secondary: ColorShades;
  typo: {
    DEFAULT: string;
    secondary: string;
    tertiary: string;
    icons: string;
    divider: string;
    outline: string;
  };
  theme: {
    dark: string;
    light: string;
  };
  [key: string]: ColorShades | string | Colors["typo"]; // Flexible for new entries
}

const colors: Colors = {
  primary: {
    50: "#F2F2FA",
    //* Background
    100: "#E9E8F6",
    200: "#E6E4FC",
    //* Complement
    300: "#DCD9FF",
    400: "#C2BEFA",
    //* Default
    500: "#4E46B4",
    //* Hovered
    600: "#342BA8",
    //* Active
    700: "#20188A",
    800: "#150E6D",
    900: "#0C0750",
  },
  secondary: {
    50: "#EFF9F8",
    100: "#E8F4F3",
    200: "#E0F3F1",
    300: "#D0EDEB",
    400: "#A2DBD7",
    500: "#40A69F",
    600: "#3B9993",
    700: "#2F7A75",
    800: "#235C58",
    900: "#173D3A",
  },
  typo: {
    DEFAULT: "#1F1F1F",
    secondary: "#707070",
    tertiary: "#999CA0",
    icons: "#999CA0",
    divider: "#EBEBEB",
    outline: "#D9D9D9",
  },
  theme: {
    dark: "#222222",
    light: "#F5F5F5",
  },
};

export default function ColorPalettePage() {
  return (
    <SandboxLayout
      title="Color Palette"
      description="Explore the color palette used throughout the design system."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* <PrimaryColorCard /> */}
        {Object.keys(colors).map((colorName) => (
          <div key={colorName} className="space-y-4">
            <h2 className="text-2xl font-semibold capitalize">{colorName}</h2>
            {Object.entries(colors[colorName]).map(
              ([shadeName, colorValue]) => (
                <div key={shadeName} className="flex items-center space-x-4 ">
                  <div
                    className={clsxm("w-16 h-16 rounded-full")}
                    style={{ backgroundColor: colorValue }}
                  />
                  <span className="text-lg">
                    {shadeName}:{" "}
                    <span className="font-semibold">{colorValue}</span>
                  </span>
                </div>
              ),
            )}
          </div>
        ))}
      </div>
    </SandboxLayout>
  );
}
