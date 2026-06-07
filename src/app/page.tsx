import Image from "next/image";
import { ActivityMainContent } from "@/components/activity-main-content";
import { AsciiHeader } from "@/components/ascii-header";
import { HomeMainContent } from "@/components/home-main-content";
import { LocalClock } from "@/components/local-clock";
import { MainColumnContent } from "@/components/main-column-content";
import { SocialIcon } from "@/components/social-icon";
import { ThemeButton } from "@/components/theme-button";
import { site } from "@/data/site";
import profilePicture from "@/pfp.jpg";

function Panel({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`panel ${className}`}>
      <span className="panel-legend">{label}</span>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ThemeButton />

      <AsciiHeader />

      <div className="page-grid">
        <aside className="sidebar">
          <a
            className="profile-picture"
            href="#top"
            aria-label={`${site.name} profile`}
          >
            <Image
              src={profilePicture}
              alt={`${site.name} profile`}
              fill
              sizes="160px"
              priority
            />
          </a>

          <Panel label="socials" className="side-panel">
            <ul className="socials">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel label="clock" className="side-panel side-info">
            <LocalClock />
          </Panel>

          <Panel label="status" className="side-panel side-info">
            <strong className="online">I&apos;M ONLINE</strong>
            <span>{site.status}</span>
          </Panel>

          <div className="panel side-panel sidebar-ornament" aria-hidden="true">
            <span className="suit suit-orange">♠</span>
            <span className="suit suit-white">♥</span>
            <span className="suit suit-orange">♦</span>
            <span className="suit suit-white">♣</span>
          </div>
        </aside>

        <div className="main-column">
          <MainColumnContent
            home={<HomeMainContent />}
            activity={<ActivityMainContent />}
          />

          <footer id="contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span className="mono">{site.title}</span>
          </footer>
        </div>
      </div>
    </>
  );
}
