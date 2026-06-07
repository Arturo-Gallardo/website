import Image from "next/image";
import { LiveAge } from "@/components/live-age";
import { site } from "@/data/site";

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

function ToolGroup({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div className="tool-group">
      <div className="tool-heading">
        <span />
        <p>{label}</p>
        <span />
      </div>
      <div className="tool-list">
        {items.map((item) => (
          <div className="tool-chip" key={item}>
            <b>{item.slice(0, 2).toUpperCase()}</b>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof site.projects)[number];
}) {
  return (
    <article className="project-card">
      <span className="year">{project.year}</span>
      <div className="project-image">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>
      <div className="project-content">
        <h2 title={project.name}>{project.name}</h2>
        <p>{project.description}</p>
        <div className="project-meta">
          <span>★ 0</span>
          <span>
            <i style={{ background: project.color }} />
            {project.language}
          </span>
        </div>
        <hr />
        <div
          className={`project-actions ${"website" in project ? "" : "single"}`}
        >
          <a href={project.source}>
            <span>◉</span> Source
          </a>
          {"website" in project ? (
            <a className="primary" href={project.website}>
              <span>◎</span> Website
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function HomeMainContent() {
  return (
    <>
      <Panel label="about" className="about-panel">
        <div id="about">
          {site.about.map((paragraph, index) => (
            <p key={paragraph}>
              {index === 0 ? (
                <>
                  Hey! I&apos;m <strong>{site.name}</strong>. I&apos;m a{" "}
                  <LiveAge /> year old {site.role}.
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}

          <div className="identity-tags">
            <span>♟ {site.pronouns}</span>
            <span>● {site.location}</span>
          </div>
        </div>
      </Panel>

      <Panel label="tools" className="tools-panel">
        {Object.entries(site.tools).map(([label, items]) => (
          <ToolGroup label={label} items={items} key={label} />
        ))}
      </Panel>

      <div className="section-divider" id="projects">
        <span />
        <p>projects</p>
        <span />
      </div>

      <div className="projects">
        {site.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
