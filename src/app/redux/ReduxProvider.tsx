"use client";
import { Provider } from "react-redux"
import reduxStore from "@/redux/store";
import { LayoutProps } from ".next/types/app/layout";

export default function ReduxProvider({ children }: LayoutProps) {
    return <Provider store={reduxStore}>{children}</Provider>;
};