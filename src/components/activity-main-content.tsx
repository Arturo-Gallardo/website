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

export function ActivityMainContent() {
  return (
    <Panel label="test" className="activity-panel">
      <div className="activity-placeholder" />
    </Panel>
  );
}
