import { FC } from "react";
export interface WorkProps {
    id: number;
    name: string;
    introduction: string;
    href: string;
}
declare const WorkCard: FC<WorkProps>;
export default WorkCard;
