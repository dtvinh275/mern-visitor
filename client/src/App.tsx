import { Home, CreateVisitor } from "pages";

import { Refine } from "@pankod/refine-core";

import dataProvider from "@pankod/refine-simple-rest";
import { HeadlessInferencer } from "@pankod/refine-inferencer/headless";
import routerProvider from "@pankod/refine-react-router-v6";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <Refine
      dataProvider={dataProvider("http://localhost:8081/api/v1")}
      routerProvider={routerProvider}
      resources={[
        {
          name: "visitors",
          create: CreateVisitor,
          list: Home,
        },
      ]}
      i18nProvider={i18nProvider}
      // DashboardPage={Home}
      options={{
        reactQuery: {
          devtoolConfig: false,
        },
      }}
    />
  );
}

export default App;
