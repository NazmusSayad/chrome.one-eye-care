import fs from 'fs'
import path from 'path'
import color, { ColorInstance } from 'color'
import { fileURLToPath } from 'url'
import packageJSON from './package.json'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_FOREGROUND = color('#CCCCCC')
const BASE_BACKGROUND = color('#1D2025')

const colors = {
  foreground: convertColor(BASE_FOREGROUND),
  secondaryForeground: convertColor(BASE_FOREGROUND.darken(0.09)),
  inactiveForeground: convertColor(BASE_FOREGROUND.darken(0.375)),

  frameBackground: convertColor(BASE_BACKGROUND.darken(0.5).desaturate(0.5)),
  toolbarBackground: convertColor(BASE_BACKGROUND),

  addressBarForeground: convertColor(BASE_FOREGROUND),
  addressBarBackground: convertColor(BASE_BACKGROUND.darken(0.15)),
}

const manifestJSON = {
  manifest_version: 3,
  version: packageJSON.version,

  name: 'One Eye Care (OneDark)',
  author: 'Nazmus Sayad (nazmussayad.com)',
  description:
    'Explore One Eye Care (OneDark) - a vibrant, artistic Chrome theme enhancing user interface aesthetics!',

  theme: {
    colors: {
      frame: colors.frameBackground,
      frame_inactive: colors.frameBackground,
      frame_incognito: colors.frameBackground,
      frame_incognito_inactive: colors.frameBackground,

      background_tab: colors.frameBackground,
      background_tab_inactive: colors.frameBackground,
      background_tab_incognito: colors.frameBackground,
      background_tab_incognito_inactive: colors.frameBackground,

      tab_background_text: colors.inactiveForeground,
      tab_background_text_inactive: colors.inactiveForeground,
      tab_background_text_incognito: colors.inactiveForeground,
      tab_background_text_incognito_inactive: colors.inactiveForeground,

      ntp_text: colors.foreground,
      ntp_background: colors.frameBackground,

      toolbar: colors.toolbarBackground,
      toolbar_button_icon: colors.foreground,

      tab_text: colors.foreground,
      bookmark_text: colors.secondaryForeground,

      omnibox_text: colors.addressBarForeground,
      omnibox_background: colors.addressBarBackground,
    },
  },
}

function convertColor(color: ColorInstance): number[] {
  return color.rgb().array().map(Math.round)
}

const outDir = path.join(__dirname, './dist')
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true })
}
fs.mkdirSync(outDir)

const manifestPath = path.join(outDir, 'manifest.json')
fs.writeFileSync(manifestPath, JSON.stringify(manifestJSON))
