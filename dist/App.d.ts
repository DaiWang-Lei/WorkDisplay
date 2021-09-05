import React from "react";
interface Props {
}
interface State {
    robotData: any[];
    count: number;
}
declare class App extends React.Component<Props, State> {
    constructor(props: any);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export default App;
