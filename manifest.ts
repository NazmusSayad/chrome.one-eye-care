import fs from 'fs'
import path from 'path'
import color from 'color'
import { fileURLToPath } from 'url'
import packageJSON from './package.json'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const colors = {
  foreground: color('#cccccc').rgb().array(),
  inactiveForeground: color('#7f848e').rgb().array(),

  background: color('#1d1f23').rgb().array(),
  toolbarBackground: color('#21252c').rgb().array(),
  addressBarBackground: color('#1d2025').rgb().array(),
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
      frame: colors.background,
      frame_inactive: colors.background,
      frame_incognito: colors.background,
      frame_incognito_inactive: colors.background,

      background_tab: colors.background,
      background_tab_inactive: colors.background,
      background_tab_incognito: colors.background,
      background_tab_incognito_inactive: colors.background,

      tab_background_text: colors.inactiveForeground,
      tab_background_text_inactive: colors.inactiveForeground,
      tab_background_text_incognito: colors.inactiveForeground,
      tab_background_text_incognito_inactive: colors.inactiveForeground,

      ntp_text: colors.foreground,
      ntp_background: colors.background,

      toolbar: colors.toolbarBackground,
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
