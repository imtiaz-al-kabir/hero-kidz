import { Outfit } from "next/font/google";

export const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

// Keeping for legacy support if needed, or remove if unused. 
// Ideally we should fully switch, but I'll comment it out to avoid breaking imports elsewhere if any.
// export const fontBangla = ... 
// Actually, let's keep the export if it's used, but we are switching main font.
import localFont from "next/font/local";
export const fontBangla = localFont({
    src: "../fonts/mayaboti-normal.ttf",
    variable: "--font-bangla",
});
