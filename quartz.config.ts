import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Charles Montmeny",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cmontmeny.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "JetBrains Mono", // Style "code" pour les titres
    body: "Inter",             // Texte très lisible pour le corps
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light: "#fafafa",       // Fond très légèrement gris (moins agressif que blanc pur)
      lightgray: "#e5e5e5",   // Bordures et séparateurs
      gray: "#737373",        // Texte secondaire
      darkgray: "#171717",    // Texte principal (presque noir)
      dark: "#000000",        // Titres
      secondary: "#3b82f6",   // Bleu pur pour les liens (style classique)
      tertiary: "#93c5fd",    // Accent au survol
      highlight: "rgba(59, 130, 246, 0.1)",
    },
    darkMode: {
      light: "#111111",       // Fond sombre profond
      lightgray: "#262626",
      gray: "#a3a3a3",
      darkgray: "#e5e5e5",
      dark: "#ffffff",
      secondary: "#60a5fa",
      tertiary: "#93c5fd",
      highlight: "rgba(59, 130, 246, 0.15)",
    },
  },
}
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
