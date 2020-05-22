// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: string
      primaryTint: string
      primaryContrast: string
      secondary: string
      secondaryTint: string
      secondaryContrast: string
      tertiary: string
      tertiaryTint: string
      tertiaryContrast: string
    }
  }
}
