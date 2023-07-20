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

const HIDDEN_BANNER = ["/", "/queryroom", "/login", "/register"];

const HIDDEN_NAV = ["/", "/queryroom", "/login", "/register"];

const HIDDEN_FOOTER = [];

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 60px); /* Account for the header height */
  padding-top: 60px; /* Set to the same height as the header */
  padding-bottom: 30px; /* Set to the height of the footer */
  overflow-y: auto; /* Enable vertical scrolling for the content */
`;

const FootWrapper = styled.div`
  width: 100%;
  height: 30px;
  position: fixed;
  bottom: 0;
  z-index: 9;
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
      {!isHiddenHeader && <LayoutHeader />}
      <ContentWrapper>
        {!isHiddenBanner && <LayoutBanner />}
        {!isHiddenNavigation && <LayoutNavigation />}
        <div>
          <div>{props.children}</div>
        </div>
      </ContentWrapper>
      <FootWrapper>{!isHiddenFooter && <LayoutFooter />}</FootWrapper>
    </Wrapper>
  );
}
