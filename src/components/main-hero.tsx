import { useTranslation } from "react-i18next";

export const MainHero = () => {
  const { t } = useTranslation("main-hero");
  return <h1>{t("heading")}</h1>;
};
