
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  const contactLinks = [
    {
      id: "email",
      label: t("contact.emailLabel"),
      value: "kpoorooshasb@gmail.com",
      description: t("contact.emailDescription"),
      href: "mailto:kpoorooshasb@gmail.com",
      icon: "✉",
      color: "green",
    },
    {
      id: "telegram",
      label: t("contact.telegramLabel"),
      value: "@p_shsb",
      description: t("contact.telegramDescription"),
      href: "https://t.me/p_shsb",
      icon: "➤",
      color: "blue",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-terminal">
        <header className="contact-terminal-header">
          <div className="contact-window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <span className="contact-terminal-path">
            PS C:\Users\Pooriya\Contact&gt;
          </span>

          <span className="contact-terminal-status">
            {t("contact.terminalStatus")}
          </span>
        </header>

        <div className="contact-content">
          <div className="contact-main">
            <p className="contact-command">
              <span>PS&gt;</span>{" "}
              {t("contact.command")}
            </p>

            <h2 className="contact-title">
              {t("contact.title")}
              <span className="contact-cursor" />
            </h2>

            <p className="contact-intro">
              {t("contact.description")}
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  className={`contact-link contact-link--${link.color}`}
                  href={link.href}
                  target={link.id === "telegram" ? "_blank" : undefined}
                  rel={
                    link.id === "telegram"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span
                    className="contact-link-icon"
                    aria-hidden="true"
                  >
                    {link.icon}
                  </span>

                  <span className="contact-link-content">
                    <span className="contact-link-label">
                      {link.label}
                    </span>

                    <strong className="contact-link-value">
                      {link.value}
                    </strong>

                    <span className="contact-link-description">
                      {link.description}
                    </span>
                  </span>

                  <span
                    className="contact-link-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            className="contact-visual"
            aria-label={t("contact.visualLabel")}
          >
            <div className="contact-code-window">
              <div className="contact-code-header">
                <div
                  className="contact-window-dots"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </div>

                <span>contact.json</span>
              </div>

              <pre className="contact-code">
                <span className="code-muted">{"{"}</span>{"\n"}
                {"  "}
                <span className="code-key">"status"</span>:{" "}
                <span className="code-string">
                  "{t("contact.jsonStatus")}"
                </span>
                ,{"\n"}
                {"  "}
                <span className="code-key">"email"</span>:{" "}
                <span className="code-string">
                  "kpoorooshasb@gmail.com"
                </span>
                ,{"\n"}
                {"  "}
                <span className="code-key">"telegram"</span>:{" "}
                <span className="code-string">"@p_shsb"</span>
                ,{"\n"}
                {"  "}
                <span className="code-key">"response"</span>:{" "}
                <span className="code-string">
                  "{t("contact.jsonResponse")}"
                </span>
                {"\n"}
                <span className="code-muted">{"}"}</span>
              </pre>

              <div className="contact-code-footer">
                <span className="contact-live-dot" />
                {t("contact.connectionStatus")}
              </div>
            </div>

            <div className="contact-floating-symbol contact-symbol-one">
              {"</>"}
            </div>

            <div className="contact-floating-symbol contact-symbol-two">
              {"{ }"}
            </div>

            <div
              className="contact-grid-pattern"
              aria-hidden="true"
            />
          </div>
        </div>

        <footer className="contact-terminal-footer">
          <span>
            <span className="contact-live-dot" />
            {t("contact.available")}
          </span>

          <span className="contact-footer-message">
            {t("contact.footer")} <span>↗</span>
          </span>
        </footer>
      </div>
    </section>
  );
}
