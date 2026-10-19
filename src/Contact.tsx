
import "./Contact.css";

const contactLinks = [
  {
    id: "email",
    label: "EMAIL",
    value: "kpoorooshasb@gmail.com",
    description: "Send me an email. I'll get back to you as soon as possible.",
    href: "mailto:kpoorooshasb@gmail.com",
    icon: "✉",
    color: "green",
  },
  {
    id: "telegram",
    label: "TELEGRAM",
    value: "@p_shsb",
    description: "Reach out on Telegram for a quick conversation.",
    href: "https://t.me/p_shsb",
    icon: "➤",
    color: "blue",
  },
];

export default function Contact() {
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
            GET-IN-TOUCH
          </span>
        </header>

        <div className="contact-content">
          <div className="contact-main">
            <p className="contact-command">
              <span>PS&gt;</span> Get-Contact
            </p>

            <h2 className="contact-title">
              Let's Connect<span className="contact-cursor" />
            </h2>

            <p className="contact-intro">
              I'm always open to new opportunities, interesting
              projects, and meaningful conversations. Feel free
              to reach out through the channels below.
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
                  <span className="contact-link-icon" aria-hidden="true">
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

                  <span className="contact-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-visual" aria-label="Developer terminal illustration">
            <div className="contact-code-window">
              <div className="contact-code-header">
                <div className="contact-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>contact.json</span>
              </div>

              <pre className="contact-code">
                <span className="code-muted">{"{"}</span>{"\n"}
                {"  "}<span className="code-key">"status"</span>:{" "}
                <span className="code-string">"available"</span>,{"\n"}
                {"  "}<span className="code-key">"email"</span>:{" "}
                <span className="code-string">
                  "kpoorooshasb@gmail.com"
                </span>
                ,{"\n"}
                {"  "}<span className="code-key">"telegram"</span>:{" "}
                <span className="code-string">"@p_shsb"</span>,{"\n"}
                {"  "}<span className="code-key">"response"</span>:{" "}
                <span className="code-string">"Looking forward to it!"</span>
                {"\n"}
                <span className="code-muted">{"}"}</span>
              </pre>

              <div className="contact-code-footer">
                <span className="contact-live-dot" />
                CONNECTION_STATUS: READY
              </div>
            </div>

            <div className="contact-floating-symbol contact-symbol-one">
              {"</>"}
            </div>
            <div className="contact-floating-symbol contact-symbol-two">
              {"{ }"}
            </div>
            <div className="contact-grid-pattern" aria-hidden="true" />
          </div>
        </div>

        <footer className="contact-terminal-footer">
          <span>
            <span className="contact-live-dot" />
            Available for new opportunities
          </span>
          <span className="contact-footer-message">
            Let's build something great together <span>↗</span>
          </span>
        </footer>
      </div>
    </section>
  );
}
