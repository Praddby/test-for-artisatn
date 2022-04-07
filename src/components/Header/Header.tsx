import { HeaderBlock, HeaderLink, LogoLink, NavigationWrapper, PageNavigation } from "./styled";

export const Header = () => {
  return (
    <HeaderBlock>
      <LogoLink to={"/"}>Logo</LogoLink>
      <PageNavigation>
        <NavigationWrapper>
          <HeaderLink to={"/"}>Home</HeaderLink>
          <HeaderLink to={"/catalog"}>Catalog</HeaderLink>
        </NavigationWrapper>
      </PageNavigation>
    </HeaderBlock>
  )
}