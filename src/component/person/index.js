import { Container, Wrapper, Title, SubTitle, Link, LinkWrapper, Image } from "./styles/person";

export default function Person({ children, ...restProps }) {
    return <Container {...restProps}>{children} </Container>;
}
Person.Wrapper = function PersonWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children} </Wrapper>;
};

Person.Title = function PersonTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Person.SubTitle = function PersonSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Person.Link = function PersonLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};
Person.LinkWrapper = function PersonLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};
Person.Image = function PersonImage({ src, alt, ...restProps }) {
    return <Image src={src} alt={alt} {...restProps} />;
};
