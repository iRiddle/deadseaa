
import classes from './PageLayout.module.scss'

const PageLayout = ({ content }) => {
    return (
        <>
            <h1>{content.title.rendered}</h1>
            <section className={classes['page-layout']} dangerouslySetInnerHTML={{ __html: content.content.rendered || '' }} />
        </>
    )
}
export default PageLayout
