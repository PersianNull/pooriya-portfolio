
import { useTranslation } from "react-i18next";
import "./Education.css";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="education-section">
      <div className="education-inner">
        <header className="education-header">
          <span className="education-eyebrow">
            <span className="education-eyebrow-dot" />
            {t("educationPage.eyebrow")}
          </span>

          <h2>
            {t("educationPage.headingEducation")}{" "}
            <span>{t("educationPage.headingConnector")}</span>{" "}
            {t("educationPage.headingLanguages")}
          </h2>

          <p>{t("educationPage.intro")}</p>
        </header>

        <div className="education-layout">
          {/* Education timeline */}
          <div className="education-column">
            <h3 className="education-column-title">
              <span className="education-index">01</span>
              {t("educationPage.educationColumnTitle")}
            </h3>

            <div className="education-timeline">
              <article className="education-item education-item-current">
                <span className="education-node" />

                <div className="education-item-top">
                  <span className="education-date">
                    {t("educationPage.masterDate")}
                  </span>

                  <span className="education-status">
                    <span />
                    {t("educationPage.masterStatus")}
                  </span>
                </div>

                <h4>{t("educationPage.masterProgram")}</h4>

                <p className="education-institution">
                  {t("educationPage.masterInstitution")}
                </p>

                <span className="education-degree-type">
                  {t("educationPage.masterDegree")}
                </span>
              </article>

              <article className="education-item">
                <span className="education-node" />

                <div className="education-item-top">
                  <span className="education-date">
                    {t("educationPage.bachelorDate")}
                  </span>
                </div>

                <h4>{t("educationPage.bachelorProgram")}</h4>

                <p className="education-institution">
                  {t("educationPage.bachelorInstitution")}
                </p>

                <span className="education-degree-type">
                  {t("educationPage.bachelorDegree")}
                </span>
              </article>
            </div>
          </div>

          {/* Languages */}
          <div className="languages-column">
            <h3 className="education-column-title">
              <span className="education-index">02</span>
              {t("educationPage.languagesColumnTitle")}
            </h3>

            <div className="languages-panel">
              <div className="language-item">
                <div className="language-symbol">فا</div>

                <div className="language-info">
                  <h4>{t("educationPage.persianName")}</h4>
                  <p>{t("educationPage.persianDescription")}</p>
                </div>

                <span className="language-level">
                  {t("educationPage.nativeLevel")}
                </span>
              </div>

              <div className="language-item">
                <div className="language-symbol">EN</div>

                <div className="language-info">
                  <h4>{t("educationPage.englishName")}</h4>
                  <p>{t("educationPage.englishDescription")}</p>
                </div>

                <span className="language-level">7.0</span>
              </div>

              <div className="language-item">
                <div className="language-symbol">DE</div>

                <div className="language-info">
                  <h4>{t("educationPage.germanName")}</h4>
                  <p>{t("educationPage.germanDescription")}</p>
                </div>

                <span className="language-level">B2</span>
              </div>
            </div>

            <div className="languages-note">
              <span className="languages-note-mark">+</span>
              <p>{t("educationPage.learningNote")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
