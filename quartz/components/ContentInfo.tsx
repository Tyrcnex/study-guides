import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/contentMeta.scss"

const defaultAuthor = "Tyrcnex"

const ContentInfo: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const author = fileData.frontmatter?.author;
    if (author && author.toString().toLowerCase() == 'none') return <></>;
    return <p class={classNames(displayClass, "content-meta")}>Author: {author ? author : defaultAuthor}</p>
}

ContentInfo.css = `
.content-info {
  margin: 2rem 0 0 0;
}
`

export default (() => ContentInfo) satisfies QuartzComponentConstructor
