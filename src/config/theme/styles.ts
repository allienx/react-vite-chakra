// Customizing global styles:
// https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles
export const styles = {
  global: {
    '[type="search"]::-webkit-search-cancel-button': {
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    '[type="search"]::-webkit-search-decoration': {
      WebkitAppearance: 'none',
      appearance: 'none',
    },
  },
}
