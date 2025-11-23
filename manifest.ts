import fs from 'fs'
import path from 'path'
import color from 'color'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const colors = {
  background: color('#1d2025').rgb().array(),
  secondaryBackground: color('#252931').rgb().array(),

  foreground: color('#cccccc').rgb().array(),
  secondaryForeground: color('#abb2bf').rgb().array(),

  addressBarBackground: color('#282c34').rgb().array(),
}

const manifestJSON = {
  version: '1.0.4',
  manifest_version: 3,
  name: 'One Eye Care (OneDark)',
  author: 'Nazmus Sayad (nazmussayad.com)',
  description:
    'Explore One Eye Care (OneDark) - a vibrant, artistic Chrome theme enhancing user interface aesthetics!',

  theme: {
    colors: {
      frame: colors.background,
      frame_inactive: colors.background,
      frame_incognito: colors.background,
      frame_incognito_inactive: colors.background,

      ntp_text: colors.foreground,
      ntp_background: colors.background,

      background_tab: colors.background,
      background_tab_inactive: colors.background,
      background_tab_incognito: colors.background,
      background_tab_incognito_inactive: colors.background,

      tab_background_text: colors.secondaryForeground,
      tab_background_text_inactive: colors.secondaryForeground,
      tab_background_text_incognito: colors.secondaryForeground,
      tab_background_text_incognito_inactive: colors.secondaryForeground,

      toolbar: colors.secondaryBackground,
      toolbar_button_icon: colors.foreground,

      tab_text: colors.foreground,
      bookmark_text: colors.foreground,

      omnibox_text: colors.foreground,
      omnibox_background: colors.addressBarBackground,
    },
  },
}

const manifestPath = path.join(__dirname, 'manifest.json')
fs.writeFileSync(manifestPath, JSON.stringify(manifestJSON))
