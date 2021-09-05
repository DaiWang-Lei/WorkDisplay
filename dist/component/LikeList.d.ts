import React from "react";
interface Props {
}
interface State {
    isOpen: boolean;
}
declare class LikeList extends React.Component<Props, State> {
    constructor(props: Props);
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export default LikeList;
