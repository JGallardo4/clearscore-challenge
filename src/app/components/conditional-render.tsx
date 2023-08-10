import { ReactNode } from "react"

interface Props {
    isShouldRender: Boolean,
    children: ReactNode;
}

export default function ConditionalRender({ isShouldRender, children }: Props) {
    return (<>{isShouldRender && children}</>)
}
