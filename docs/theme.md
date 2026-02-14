# Bash Buddies — LinkittyDo Theme Documentation

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ld-cream` | `#FDEC92` | Primary background, warm base |
| `--ld-mint` | `#A9EAD2` | Secondary panels, geometric accents |
| `--ld-ink` | `#161813` | Primary text, outlines, borders |
| `--ld-pop` | `#FB2B57` | CTA buttons, highlights, alerts |
| `--ld-paper` | `#EEEDE5` | Card backgrounds, subtle panels |
| `--ld-muted-green` | `#5E6554` | Subtle text, disabled states |
| `--ld-muted-gold` | `#A29A61` | Secondary accents, badges |
| `--ld-muted-peach` | `#E7A790` | Warm accents, friendly highlights |

## Typography

### Headline Font: Luckiest Guy
- Used for: game title, scene headings, big buttons, victory text
- Style: bold, playful, slightly rounded retro feel
- Google Fonts: `Luckiest+Guy`

### Body/UI Font: Nunito
- Used for: body text, dialogue, labels, form fields, navigation
- Weights: 400 (regular), 600 (semi-bold), 700 (bold)
- Google Fonts: `Nunito:wght@400;600;700`

## UI Component Styles

### Buttons
- **Primary CTA:** `--ld-pop` background, white text, thick `--ld-ink` border (3px), rounded corners (12px), drop shadow
- **Secondary:** `--ld-mint` background, `--ld-ink` text, same border style
- **Ghost/link:** transparent background, `--ld-pop` text, underline on hover
- All buttons: bold Nunito text, letter-spacing 0.5px, min-height 48px for touch

### Cards/Panels
- Background: `--ld-paper` or `--ld-cream`
- Border: 3px solid `--ld-ink`
- Border-radius: 16px
- Box-shadow: 4px 4px 0 `--ld-ink` (chunky retro shadow)

### Input Fields
- Background: white
- Border: 2px solid `--ld-ink`
- Border-radius: 8px
- Focus: border-color `--ld-pop`, box-shadow glow
- Font: Nunito 400

### Header
- Background: `--ld-mint`
- Title: Luckiest Guy, `--ld-ink` color
- Player name + logout action always visible

### Dialog Overlays
- Semi-transparent ink backdrop (`rgba(22, 24, 19, 0.6)`)
- Centered card with `--ld-paper` background
- Chunky border + shadow style

## Layout Principles
- Centered play area (max-width ~800px)
- Chunky, rounded UI elements
- Thick borders, soft drop-shadows
- Clear visual hierarchy: title → content → actions
- Consistent spacing (8px base unit)

## Accessibility
- Ink on cream maintains WCAG AA contrast (>4.5:1)
- Pop red only for emphasis, not sole information carrier
- Focus states visible (2px pop outline)
- Reduced motion: `prefers-reduced-motion` disables animations
