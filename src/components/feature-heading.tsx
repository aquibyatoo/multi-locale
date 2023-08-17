import { useTranslation } from "react-i18next";

export const FeatureHeading = () => {
  const { t } = useTranslation("feature-section");

  return <h3>{t("heading")}</h3>;
};
