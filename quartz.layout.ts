import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { sortFn } from "./functions";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    footer: Component.Footer({
        links: {
            "Quartz Github": "https://github.com/jackyzha0/quartz",
            "Quartz Discord Community": "https://discord.gg/cRFFHYye7t",
            "AP Students Discord Community": "https://discord.gg/apstudents"
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentInfo(), Component.TagList()],
    pageBody: Component.Paginator(),
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer({
            sortFn: sortFn
        })),
    ],
    right: [
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentInfo(), Component.TagList()],
    pageBody: Component.Paginator(),
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer({
            sortFn: sortFn
        })),
    ],
    right: [],
}
