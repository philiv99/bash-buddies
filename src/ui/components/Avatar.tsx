/**
 * Bash Buddies — Caricature Avatar Component
 * SVG-based caricature avatars for party guests.
 */

import type { CaticatureStyle, PartyGuest } from '../../types';
import './Avatar.css';

interface AvatarProps {
  guest: PartyGuest;
  size?: number;
  onClick?: () => void;
  disabled?: boolean;
  showName?: boolean;
}

/**
 * Get SVG face elements based on caricature style.
 */
function getAvatarElements(style: CaticatureStyle, colors: PartyGuest['colors']) {
  const { primary, secondary, accent } = colors;

  // Each style has unique hair, accessories, and expressions
  switch (style) {
    case 'hipster':
      return (
        <>
          {/* Beanie */}
          <ellipse cx="50" cy="22" rx="30" ry="14" fill={primary} />
          <rect x="20" y="20" width="60" height="8" rx="2" fill={primary} />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Glasses */}
          <circle cx="41" cy="45" r="8" fill="none" stroke="#161813" strokeWidth="2.5" />
          <circle cx="59" cy="45" r="8" fill="none" stroke="#161813" strokeWidth="2.5" />
          <line x1="49" y1="45" x2="51" y2="45" stroke="#161813" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="41" cy="45" r="2.5" fill="#161813" />
          <circle cx="59" cy="45" r="2.5" fill="#161813" />
          {/* Beard */}
          <path d="M32 55 Q50 72 68 55" fill={accent} stroke="#161813" strokeWidth="1.5" />
          {/* Smile */}
          <path d="M43 56 Q50 60 57 56" fill="none" stroke="#161813" strokeWidth="1.5" strokeLinecap="round" />
        </>
      );

    case 'nerd':
      return (
        <>
          {/* Hair - neat part */}
          <path d="M28 35 Q30 15 50 12 Q70 15 72 35" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Big glasses */}
          <rect x="31" y="39" width="16" height="14" rx="3" fill="none" stroke="#161813" strokeWidth="2.5" />
          <rect x="53" y="39" width="16" height="14" rx="3" fill="none" stroke="#161813" strokeWidth="2.5" />
          <line x1="47" y1="45" x2="53" y2="45" stroke="#161813" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="39" cy="46" r="3" fill="#161813" />
          <circle cx="61" cy="46" r="3" fill="#161813" />
          <circle cx="40" cy="45" r="1" fill="white" />
          <circle cx="62" cy="45" r="1" fill="white" />
          {/* Big grin */}
          <path d="M40 57 Q50 65 60 57" fill="white" stroke="#161813" strokeWidth="1.5" />
          {/* Bow tie */}
          <polygon points="44,72 50,68 56,72 50,76" fill={accent} stroke="#161813" strokeWidth="1" />
        </>
      );

    case 'artist':
      return (
        <>
          {/* Wild hair */}
          <path d="M22 40 Q18 15 35 10 Q45 5 55 10 Q72 8 78 40" fill={primary} stroke="#161813" strokeWidth="2" />
          <circle cx="25" cy="28" r="6" fill={primary} stroke="#161813" strokeWidth="1.5" />
          <circle cx="75" cy="28" r="5" fill={primary} stroke="#161813" strokeWidth="1.5" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Dreamy eyes */}
          <ellipse cx="40" cy="45" rx="5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <ellipse cx="60" cy="45" rx="5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <circle cx="41" cy="45" r="2.5" fill={accent} />
          <circle cx="61" cy="45" r="2.5" fill={accent} />
          <circle cx="41" cy="44" r="1" fill="white" />
          <circle cx="61" cy="44" r="1" fill="white" />
          {/* Gentle smile */}
          <path d="M42 56 Q50 62 58 56" fill="none" stroke="#161813" strokeWidth="1.5" strokeLinecap="round" />
          {/* Paint splatter on cheek */}
          <circle cx="65" cy="54" r="3" fill={accent} opacity="0.7" />
        </>
      );

    case 'jock':
      return (
        <>
          {/* Short spiky hair */}
          <path d="M30 32 L35 18 L40 28 L45 15 L50 25 L55 15 L60 28 L65 18 L70 32" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Face - strong jaw */}
          <path d="M28 40 Q28 30 50 28 Q72 30 72 40 L72 52 Q72 70 50 72 Q28 70 28 52 Z" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Confident eyes */}
          <ellipse cx="40" cy="44" rx="4" ry="3.5" fill="white" stroke="#161813" strokeWidth="1.5" />
          <ellipse cx="60" cy="44" rx="4" ry="3.5" fill="white" stroke="#161813" strokeWidth="1.5" />
          <circle cx="40" cy="44" r="2.5" fill="#161813" />
          <circle cx="60" cy="44" r="2.5" fill="#161813" />
          {/* Big smile */}
          <path d="M38 56 Q50 66 62 56" fill="white" stroke="#161813" strokeWidth="2" />
          {/* Headband */}
          <rect x="26" y="32" width="48" height="5" rx="2" fill={accent} stroke="#161813" strokeWidth="1" />
        </>
      );

    case 'goth':
      return (
        <>
          {/* Dramatic hair */}
          <path d="M20 45 Q22 10 50 8 Q78 10 80 45" fill={primary} stroke="#161813" strokeWidth="2" />
          <path d="M20 45 Q20 35 30 30" fill={primary} />
          {/* Hair over one eye */}
          <path d="M25 35 Q30 20 48 25 L42 48 Q30 45 25 35" fill={primary} stroke="#161813" strokeWidth="1.5" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Visible eye (the other is covered) */}
          <ellipse cx="60" cy="45" rx="5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <circle cx="60" cy="45" r="2.5" fill={accent} />
          {/* Eyeliner */}
          <line x1="55" y1="42" x2="53" y2="40" stroke="#161813" strokeWidth="1.5" />
          <line x1="65" y1="42" x2="68" y2="40" stroke="#161813" strokeWidth="1.5" />
          {/* Smirk */}
          <path d="M48 58 Q55 62 62 58" fill="none" stroke="#161813" strokeWidth="1.5" strokeLinecap="round" />
          {/* Choker */}
          <line x1="34" y1="68" x2="66" y2="68" stroke="#161813" strokeWidth="2.5" />
          <circle cx="50" cy="68" r="3" fill={accent} stroke="#161813" strokeWidth="1" />
        </>
      );

    case 'preppy':
      return (
        <>
          {/* Styled hair with headband */}
          <path d="M28 38 Q30 15 50 12 Q70 15 72 38" fill={primary} stroke="#161813" strokeWidth="2" />
          <path d="M26 35 Q50 28 74 35" fill={accent} stroke="#161813" strokeWidth="1.5" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Bright eyes */}
          <ellipse cx="40" cy="45" rx="4.5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <ellipse cx="60" cy="45" rx="4.5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <circle cx="41" cy="45" r="2.5" fill="#161813" />
          <circle cx="61" cy="45" r="2.5" fill="#161813" />
          <circle cx="42" cy="44" r="1" fill="white" />
          <circle cx="62" cy="44" r="1" fill="white" />
          {/* Perfect smile */}
          <path d="M40 56 Q50 64 60 56" fill="white" stroke="#161813" strokeWidth="1.5" />
          {/* Blush */}
          <circle cx="33" cy="54" r="4" fill="#FFB6C1" opacity="0.5" />
          <circle cx="67" cy="54" r="4" fill="#FFB6C1" opacity="0.5" />
          {/* Pearl earring */}
          <circle cx="27" cy="52" r="2.5" fill="white" stroke="#161813" strokeWidth="1" />
        </>
      );

    case 'hippie':
      return (
        <>
          {/* Long flowing hair */}
          <path d="M22 40 Q20 15 50 10 Q80 15 78 40 L78 65 Q78 75 70 78 L30 78 Q22 75 22 65 Z" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Flower crown */}
          <circle cx="32" cy="25" r="4" fill={accent} stroke="#161813" strokeWidth="1" />
          <circle cx="42" cy="20" r="4" fill="#FF69B4" stroke="#161813" strokeWidth="1" />
          <circle cx="52" cy="18" r="4" fill={accent} stroke="#161813" strokeWidth="1" />
          <circle cx="62" cy="20" r="4" fill="#FF69B4" stroke="#161813" strokeWidth="1" />
          <circle cx="70" cy="25" r="4" fill={accent} stroke="#161813" strokeWidth="1" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Peaceful eyes */}
          <path d="M35 44 Q40 40 45 44" fill="none" stroke="#161813" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 44 Q60 40 65 44" fill="none" stroke="#161813" strokeWidth="2" strokeLinecap="round" />
          {/* Serene smile */}
          <path d="M40 56 Q50 63 60 56" fill="none" stroke="#161813" strokeWidth="1.5" strokeLinecap="round" />
          {/* Peace sign necklace */}
          <circle cx="50" cy="72" r="5" fill="none" stroke={accent} strokeWidth="1.5" />
          <line x1="50" y1="67" x2="50" y2="77" stroke={accent} strokeWidth="1.5" />
          <line x1="50" y1="72" x2="46" y2="76" stroke={accent} strokeWidth="1.5" />
          <line x1="50" y1="72" x2="54" y2="76" stroke={accent} strokeWidth="1.5" />
        </>
      );

    case 'rocker':
      return (
        <>
          {/* Wild mohawk/spiky hair */}
          <path d="M35 35 L38 8 L42 25 L46 5 L50 20 L54 5 L58 25 L62 8 L65 35" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Intense eyes */}
          <ellipse cx="40" cy="45" rx="5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <ellipse cx="60" cy="45" rx="5" ry="4" fill="white" stroke="#161813" strokeWidth="1.5" />
          <circle cx="40" cy="45" r="3" fill="#161813" />
          <circle cx="60" cy="45" r="3" fill="#161813" />
          {/* Thick eyebrows */}
          <path d="M33 39 L47 37" stroke="#161813" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M53 37 L67 39" stroke="#161813" strokeWidth="2.5" strokeLinecap="round" />
          {/* Open grin */}
          <path d="M38 57 Q50 67 62 57" fill="#161813" stroke="#161813" strokeWidth="1.5" />
          <path d="M40 57 Q50 63 60 57" fill="white" />
          {/* Earring */}
          <circle cx="27" cy="50" r="2" fill={accent} stroke="#161813" strokeWidth="1" />
          {/* Lightning bolt on cheek */}
          <path d="M66 50 L69 54 L67 54 L70 59" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        </>
      );

    case 'chef':
      return (
        <>
          {/* Chef hat */}
          <ellipse cx="50" cy="15" rx="20" ry="12" fill="white" stroke="#161813" strokeWidth="2" />
          <rect x="34" y="15" width="32" height="15" rx="2" fill="white" stroke="#161813" strokeWidth="2" />
          {/* Face - round and warm */}
          <circle cx="50" cy="50" r="23" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Warm eyes */}
          <circle cx="41" cy="47" r="3" fill="#161813" />
          <circle cx="59" cy="47" r="3" fill="#161813" />
          <circle cx="42" cy="46" r="1" fill="white" />
          <circle cx="60" cy="46" r="1" fill="white" />
          {/* Rosy cheeks */}
          <circle cx="33" cy="55" r="5" fill={accent} opacity="0.4" />
          <circle cx="67" cy="55" r="5" fill={accent} opacity="0.4" />
          {/* Big warm smile */}
          <path d="M38 58 Q50 68 62 58" fill="white" stroke="#161813" strokeWidth="1.5" />
          {/* Little curly hair peeking out */}
          <circle cx="30" cy="32" r="4" fill={primary} stroke="#161813" strokeWidth="1" />
          <circle cx="70" cy="32" r="4" fill={primary} stroke="#161813" strokeWidth="1" />
        </>
      );

    case 'scientist':
      return (
        <>
          {/* Neat hair pulled back */}
          <path d="M28 38 Q30 18 50 15 Q70 18 72 38" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Bun */}
          <circle cx="68" cy="25" r="8" fill={primary} stroke="#161813" strokeWidth="2" />
          {/* Face */}
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          {/* Smart eyes with small glasses */}
          <circle cx="41" cy="45" r="7" fill="none" stroke="#161813" strokeWidth="1.5" />
          <circle cx="59" cy="45" r="7" fill="none" stroke="#161813" strokeWidth="1.5" />
          <line x1="48" y1="45" x2="52" y2="45" stroke="#161813" strokeWidth="1.5" />
          <circle cx="41" cy="45" r="2.5" fill="#161813" />
          <circle cx="59" cy="45" r="2.5" fill="#161813" />
          {/* Raised eyebrow */}
          <path d="M34 38 Q41 34 48 38" fill="none" stroke="#161813" strokeWidth="2" strokeLinecap="round" />
          {/* Curious smile */}
          <path d="M42 57 Q50 62 58 57" fill="none" stroke="#161813" strokeWidth="1.5" strokeLinecap="round" />
          {/* Lab coat collar */}
          <path d="M35 68 L42 72 L50 68 L58 72 L65 68" fill="white" stroke="#161813" strokeWidth="1.5" />
        </>
      );

    default:
      return (
        <>
          <circle cx="50" cy="48" r="22" fill={secondary} stroke="#161813" strokeWidth="2" />
          <circle cx="41" cy="45" r="3" fill="#161813" />
          <circle cx="59" cy="45" r="3" fill="#161813" />
          <path d="M42 56 Q50 62 58 56" fill="none" stroke="#161813" strokeWidth="1.5" />
        </>
      );
  }
}

export default function Avatar({ guest, size = 100, onClick, disabled, showName = true }: AvatarProps) {
  return (
    <div
      className={`avatar-container ${onClick ? 'avatar-clickable' : ''} ${disabled ? 'avatar-disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-label={onClick ? `Talk to ${guest.name}` : guest.name}
      onKeyDown={onClick && !disabled ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 85"
        className="avatar-svg"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle cx="50" cy="45" r="40" fill={guest.colors.primary} opacity="0.15" />
        {getAvatarElements(guest.caricatureStyle, guest.colors)}
      </svg>
      {showName && <span className="avatar-name">{guest.name}</span>}
      {showName && <span className="avatar-tagline">{guest.tagline}</span>}
    </div>
  );
}
