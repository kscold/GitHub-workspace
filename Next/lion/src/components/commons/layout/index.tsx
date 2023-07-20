import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-01-library-star",
  // "/queryroom",
];

const HIDDEN_BANNER = ["/", "/queryroom", "/login"];

const HIDDEN_NAV = ["/", "/queryroom", "/login"];

const HIDDEN_FOOTER = [];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  console.log("===========");
  console.log(router.asPath);
  console.log("===========");

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNavigation = HIDDEN_NAV.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      <ContentWrapper>
        {!isHiddenHeader && <LayoutHeader />}
        {!isHiddenBanner && <LayoutBanner />}
        {!isHiddenNavigation && <LayoutNavigation />}
        {/* <LayoutNavigation /> */}
        <div>
          <div>{props.children}</div>
        </div>
        {!isHiddenFooter && <LayoutFooter />}
      </ContentWrapper>
    </Wrapper>
  );
}
