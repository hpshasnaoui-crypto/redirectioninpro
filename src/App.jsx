const RAIL_TICKS = [40, 120, 200, 280, 360]

function Rail({ mirrored = false }) {
  return (
    <div className={`rail${mirrored ? ' rail-r' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 40 400" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="0" width="10" height="400" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" />
        <rect x="4" y="0" width="4" height="400" fill="var(--line-strong)" />
        <g stroke="var(--line-strong)" strokeWidth="1">
          {RAIL_TICKS.map((y) => (
            <line key={y} x1="10" y1={y} x2="20" y2={y} />
          ))}
        </g>
      </svg>
    </div>
  )
}

const LINKS = [
  {
    href: 'https://inpro-3d.hps-hasnaoui.workers.dev/#top',
    primary: true,
    label: 'Site web',
    sub: 'inpro-dz.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
      </svg>
    ),
  },
  {
    href: 'https://drive.google.com/drive/folders/15IA4k3qwm-WmjMTWnsZdqgqIbNu76BCH?usp=drive_link',
    label: 'Catalogue IN00',
    sub: 'Porte alignée',
    logo: '/in00.png',
  },
  {
    href: 'https://drive.google.com/drive/folders/17CtkCLVnbggS1FHYp2xvDMm5NgZnIZ39?usp=drive_link',
    label: 'Catalogue IN60 — Battante',
    sub: 'Porte battante',
    logo: '/in60.png',
  },
  {
    href: 'https://drive.google.com/drive/folders/17CtkCLVnbggS1FHYp2xvDMm5NgZnIZ39?usp=drive_link',
    label: 'Catalogue IN60 — Coulissante',
    sub: 'Porte coulissante',
    logo: '/in60.png',
  },
  {
    href: 'https://drive.google.com/drive/folders/17CtkCLVnbggS1FHYp2xvDMm5NgZnIZ39?usp=drive_link',
    label: 'Catalogue IN60 — Pivotante',
    sub: 'Porte pivotante',
    logo: '/in60.png',
  },
]

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.5v3H11v7h3Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8 10.5V17M8 7.5v.01M12.5 17v-4c0-1.4.9-2.3 2-2.3s1.9.9 1.9 2.3V17" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="3.5" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="var(--ink)" stroke="none" />
      </svg>
    ),
  },
]

export default function App() {
  return (
    <>
      <Rail />
      <Rail mirrored />

      <div className="page">
        <div className="col">
          <div className="mark">
            <img className="logo-light" src="/logo-color.png" alt="INPRO" />
            <img className="logo-dark" src="/logo-white.png" alt="INPRO" />
          </div>
          <p className="brandline">
            Façonne vos <em>Espaces</em>, inspire vos <em>Emotions</em>
          </p>

          <div className="tagline">
            <p>
              INPRO est une entreprise algérienne spécialisée dans les solutions d'aménagement
              intérieur en aluminium, alliant esthétique, fonctionnalité et modernité.
            </p>
            <p>
              Son offre comprend une gamme de portes intérieures en aluminium&nbsp;: pivotantes,
              battantes, coulissantes et alignées, ainsi que du mobilier en aluminium pour
              différents espaces de la maison, notamment salles de bain, séjours, bureaux et
              espaces de rangement.
            </p>
            <p>
              <strong>INPRO, l'aluminium au service d'intérieurs modernes et élégants.</strong>
            </p>
          </div>

          <nav className="links" aria-label="Liens principaux">
            {LINKS.map((link) => (
              <a
                key={link.label}
                className={`link${link.primary ? ' primary' : ''}`}
                href={link.href}
                target={link.primary || link.logo ? '_blank' : undefined}
                rel={link.primary || link.logo ? 'noopener' : undefined}
              >
                <span className={`ic${link.logo ? ' ic-logo' : ''}`}>
                  {link.logo ? <img src={link.logo} alt="" /> : link.icon}
                </span>
                <span className="label">
                  {link.label}
                  <span className="sub">{link.sub}</span>
                </span>
                <span className="go">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="divider">Réseaux</div>

          <div className="social-row">
            {SOCIALS.map((s) => (
              <a key={s.name} className="social" href={s.href} aria-label={s.name} title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>

          <div className="qr-block">
            <img src="/inpro-qr.png" alt="QR code vers cette page" />
            <div className="qr-text">
              <p className="qr-title">Scanner pour ouvrir</p>
              <p className="qr-sub">À imprimer sur vitrine, cartes, packaging</p>
            </div>
          </div>

          <footer>INPRO &middot; LIENS</footer>
        </div>
      </div>
    </>
  )
}
