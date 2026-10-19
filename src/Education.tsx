
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-inner">
        <header className="education-header">
          <span className="education-eyebrow">
            <span className="education-eyebrow-dot" />
            04 / BACKGROUND
          </span>

          <h2>
            Education <span>&</span> Languages
          </h2>

          <p>
            My academic journey and the languages I use to
            connect, collaborate, and learn.
          </p>
        </header>

        <div className="education-layout">
          {/* Education timeline */}
          <div className="education-column">
            <h3 className="education-column-title">
              <span className="education-index">01</span>
              Education
            </h3>

            <div className="education-timeline">
              <article className="education-item education-item-current">
                <span className="education-node" />

                <div className="education-item-top">
                  <span className="education-date">
                    2026 — Present
                  </span>
                  <span className="education-status">
                    <span />
                    In progress
                  </span>
                </div>

                <h4>
                  M.Sc. Integrated Water Resources Management
                </h4>

                <p className="education-institution">
                  TH Köln — Technology Arts Sciences
                </p>

                <span className="education-degree-type">
                  Master’s degree
                </span>
              </article>

              <article className="education-item">
                <span className="education-node" />

                <div className="education-item-top">
                  <span className="education-date">
                    2014 — 2018
                  </span>
                </div>

                <h4>B.Eng. Civil Engineering</h4>

                <p className="education-institution">
                  Yazd University, Iran
                </p>

                <span className="education-degree-type">
                  Bachelor’s degree
                </span>
              </article>
            </div>
          </div>

          {/* Languages */}
          <div className="languages-column">
            <h3 className="education-column-title">
              <span className="education-index">02</span>
              Languages
            </h3>

            <div className="languages-panel">
              <div className="language-item">
                <div className="language-symbol">فا</div>

                <div className="language-info">
                  <h4>Persian</h4>
                  <p>Native language</p>
                </div>

                <span className="language-level">
                  Native
                </span>
              </div>

              <div className="language-item">
                <div className="language-symbol">EN</div>

                <div className="language-info">
                  <h4>English</h4>
                  <p>IELTS certification</p>
                </div>

                <span className="language-level">
                  7.0
                </span>
              </div>

              <div className="language-item">
                <div className="language-symbol">DE</div>

                <div className="language-info">
                  <h4>German</h4>
                  <p>Language proficiency</p>
                </div>

                <span className="language-level">
                  B2
                </span>
              </div>
            </div>

            <div className="languages-note">
              <span className="languages-note-mark">+</span>
              <p>
                Always learning. Always improving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
