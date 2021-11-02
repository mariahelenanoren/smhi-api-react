declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    searchBar: Palette['primary'];
  }
  interface PaletteOptions {
    searchBar: PaletteOptions['primary'];
  }
}

export {};
