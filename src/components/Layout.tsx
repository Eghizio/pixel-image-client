import { ReactNode } from "react";
import { Header } from "./Header";
import { PageContent, PageLayout } from "./styled";
import { ApplicationPixelTag } from "./ApplicationPixelTag";
// import { Footer } from "./Footer";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <PageLayout>
      <Header />
      <ApplicationPixelTag />
      <PageContent>{children}</PageContent>
      {/* <Footer /> */}
    </PageLayout>
  );
};
