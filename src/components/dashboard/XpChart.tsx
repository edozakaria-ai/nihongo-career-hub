interface XpChartProps {
  data: { date: string; xp: number }[];
  goal: number;
}

function label(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

/** Grafik batang XP harian (SVG, tanpa library). Disertai tabel tersembunyi untuk pembaca layar. */
export function XpChart({ data, goal }: XpChartProps) {
  const W = 700;
  const H = 220;
  const pad = { top: 16, right: 8, bottom: 28, left: 8 };
  const max = Math.max(goal, ...data.map((d) => d.xp), 10);
  const innerW = W - pad.left - pad.right;
  const innerH = H - pad.top - pad.bottom;
  const slot = innerW / Math.max(1, data.length);
  const barW = Math.max(6, slot * 0.6);
  const y = (v: number) => pad.top + innerH - (v / max) * innerH;
  const total = data.reduce((s, d) => s + d.xp, 0);
  const hit = data.filter((d) => d.xp >= goal).length;

  return (
    <figure>
      <svg
        viewBox={"0 0 " + W + " " + H}
        className="h-auto w-full"
        role="img"
        aria-label={"Grafik XP " + data.length + " hari terakhir: total " + total + " XP, target tercapai " + hit + " hari."}
      >
        <line x1={pad.left} x2={W - pad.right} y1={y(goal)} y2={y(goal)} className="stroke-brand-400" strokeWidth={1.5} strokeDasharray="6 4" />
        <text x={W - pad.right} y={y(goal) - 4} textAnchor="end" className="fill-brand-600 text-[11px] dark:fill-brand-300">
          target {goal} XP
        </text>
        {data.map((d, i) => {
          const x = pad.left + i * slot + (slot - barW) / 2;
          const h = Math.max(d.xp > 0 ? 3 : 0, (d.xp / max) * innerH);
          return (
            <g key={d.date}>
              <rect x={x} y={pad.top + innerH - h} width={barW} height={h} rx={3} className={d.xp >= goal ? "fill-brand-500" : "fill-brand-300 dark:fill-brand-700"}>
                <title>{label(d.date) + ": " + d.xp + " XP"}</title>
              </rect>
              {(data.length <= 14 || i % 2 === 0) && (
                <text x={x + barW / 2} y={H - 8} textAnchor="middle" className="fill-ink-muted text-[10px]">
                  {new Date(d.date + "T00:00:00").getDate()}
                </text>
              )}
            </g>
          );
        })}
        <line x1={pad.left} x2={W - pad.right} y1={pad.top + innerH} y2={pad.top + innerH} className="stroke-line" strokeWidth={1} />
      </svg>
      <figcaption className="sr-only">
        <table>
          <caption>XP per hari</caption>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.date}>
                <td>{label(d.date)}</td>
                <td>{d.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figcaption>
    </figure>
  );
}
