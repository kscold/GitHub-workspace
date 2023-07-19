import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-01-library-star",
  "/",
];

const HIDDEN_BANNER = ["/"];

const HIDDEN_NAV = ["/"];

const HIDDEN_FOOTER = ["/"];

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
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      {/* {!isHiddenNavigation && <LayoutNavigation />} */}
      <LayoutNavigation />
      <div>
        <div style={{}}>{props.children}</div>
      </div>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
