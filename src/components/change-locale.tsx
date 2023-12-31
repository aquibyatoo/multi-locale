// @ts-ignore
import i18n from "../config/i18n";
import * as React from "react";
import { useTranslation } from "react-i18next";

export const ChangeLocale = () => {
  const { t } = useTranslation("change-locale");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const getCurrentLocale = () => {
    return i18n.language;
  };

  return (
    <div style={{ textAlign: "right" }}>
      <label htmlFor="selectLocale">{t("changeLocale")} &nbsp; </label>
      <select
        onChange={handleChange}
        defaultValue={getCurrentLocale()}
        name="selectLocale"
      >
        <option value="en" label="English" />
        <option value="fr" label="French" />
      </select>
    </div>
  );
};
