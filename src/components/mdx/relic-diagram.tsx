export function RelicDiagram() {
  return (
    <figure className="my-12">
      <div className="overflow-x-auto rounded-2xl border border-border bg-card p-6">
        <svg
          width="100%"
          viewBox="0 0 680 385"
          role="img"
          style={{ maxWidth: "640px", display: "block", margin: "0 auto" }}
        >
          <title>Relic knowledge graph schema</title>
          <desc>
            Three file nodes (handler.py, processor.py, base.py) connected by
            imports edges, with two symbol nodes (PaymentProcessor,
            BaseProcessor) below connected by defines and extends edges.
          </desc>
          <defs>
            <marker
              id="relic-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* File nodes — purple */}
          <g>
            <rect
              x="260" y="50" width="160" height="44" rx="8"
              fill="rgba(124, 58, 237, 0.1)" stroke="#7C3AED" strokeWidth="1"
            />
            <text x="340" y="72" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="currentColor">
              src/handler.py
            </text>
          </g>
          <g>
            <rect
              x="80" y="150" width="165" height="44" rx="8"
              fill="rgba(124, 58, 237, 0.1)" stroke="#7C3AED" strokeWidth="1"
            />
            <text x="162" y="172" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="currentColor">
              src/processor.py
            </text>
          </g>
          <g>
            <rect
              x="435" y="150" width="140" height="44" rx="8"
              fill="rgba(124, 58, 237, 0.1)" stroke="#7C3AED" strokeWidth="1"
            />
            <text x="505" y="172" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="currentColor">
              src/base.py
            </text>
          </g>

          {/* Symbol nodes — teal */}
          <g>
            <rect
              x="60" y="270" width="195" height="56" rx="8"
              fill="rgba(13, 148, 136, 0.1)" stroke="#0D9488" strokeWidth="1"
            />
            <text x="157" y="288" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="currentColor">
              PaymentProcessor
            </text>
            <text x="157" y="308" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.6">
              class
            </text>
          </g>
          <g>
            <rect
              x="420" y="270" width="164" height="56" rx="8"
              fill="rgba(13, 148, 136, 0.1)" stroke="#0D9488" strokeWidth="1"
            />
            <text x="502" y="288" textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="500" fill="currentColor">
              BaseProcessor
            </text>
            <text x="502" y="308" textAnchor="middle" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.6">
              class
            </text>
          </g>

          {/* Edges */}
          <line x1="300" y1="94" x2="168" y2="150" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <line x1="380" y1="94" x2="499" y2="150" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <line x1="162" y1="194" x2="157" y2="270" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <line x1="505" y1="194" x2="502" y2="270" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <line x1="255" y1="298" x2="420" y2="298" stroke="#D85A30" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />

          {/* Legend */}
          <rect x="30" y="344" width="14" height="14" rx="3" fill="rgba(124, 58, 237, 0.1)" stroke="#7C3AED" strokeWidth="1" />
          <text x="50" y="351" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.7">File node</text>

          <rect x="140" y="344" width="14" height="14" rx="3" fill="rgba(13, 148, 136, 0.1)" stroke="#0D9488" strokeWidth="1" />
          <text x="160" y="351" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.7">Symbol node</text>

          <line x1="268" y1="340" x2="268" y2="362" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

          <line x1="280" y1="351" x2="308" y2="351" stroke="#378ADD" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <text x="315" y="351" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.7">imports</text>

          <line x1="382" y1="351" x2="410" y2="351" stroke="#BA7517" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <text x="417" y="351" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.7">defines</text>

          <line x1="480" y1="351" x2="508" y2="351" stroke="#D85A30" strokeWidth="1.5" markerEnd="url(#relic-arrow)" />
          <text x="515" y="351" dominantBaseline="central" fontSize="11" fill="currentColor" opacity="0.7">extends</text>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        handler.py imports both processor.py and base.py. Each file defines a symbol class. PaymentProcessor extends BaseProcessor.
      </figcaption>
    </figure>
  );
}
