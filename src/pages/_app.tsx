import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/contexts/ThemeContext";

type ComponentWithPageLayout = AppProps['Component'] & {
  noLayout?: boolean;
}

type AppPropsWithLayout = AppProps & {
  Component: ComponentWithPageLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const renderContent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return (
    <ThemeProvider>
      {renderContent()}
    </ThemeProvider>
  );
}