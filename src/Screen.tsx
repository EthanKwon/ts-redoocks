import React from "react";
import { useChangeLang, useT } from "./context";

export default () => {
  const setLang = useChangeLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello!")}</h1>
      <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </>
  );
};
