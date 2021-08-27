import { Container, Header, Button, PersonWrapper } from "./styles/main";

export default function Main({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Main.Header = function MainHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children} </Header>;
};

Main.Button = function MainButton({ children, ...restProps }) {
    return <Button {...restProps}>{children} </Button>;
};
Main.PersonWrapper = function MainPersonWrapper({ children, ...restProps }) {
    return <PersonWrapper {...restProps}>{children} </PersonWrapper>;
};
