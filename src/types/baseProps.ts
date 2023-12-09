import { CSSProperties, ReactNode} from "react";

export default interface BaseProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}