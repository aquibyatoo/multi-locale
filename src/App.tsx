import { ChangeLocale } from "./components/change-locale";
import { FeatureHeading } from "./components/feature-heading";
import { MainHero } from "./components/main-hero";
import "./config/i18n";

function App() {
  return (
    <div style={{ padding: "8rem" }}>
      <ChangeLocale />
      <MainHero />
      <hr />
      <FeatureHeading />
      <hr />
    </div>
  );
}

export default App;
