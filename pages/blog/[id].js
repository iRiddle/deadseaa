import Image from 'next/image'

import MainLayout from '../../layouts/MainLayout'

import WordPressApi from '../../services/WordPressService'

import { IMAGE_PLACEHOLDER } from '../../constants'

const BlogPost = ({ post }) => {
    const { title, content, _embedded } = post
    const img = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : IMAGE_PLACEHOLDER;

    return (
        <MainLayout>
            <section>
                <h1>
                    {title.rendered}
                </h1>
                <Image
                    src={img}
                    alt="Пост"
                    width={200}
                    height={200}
                />
                <div dangerouslySetInnerHTML={{ __html: `<p>${content.rendered}</p>` }}></div>
            </section>
        </MainLayout>
    )
}

export async function getServerSideProps({ params }) {
    const post = await WordPressApi.posts().embed().id(params.id).then(response => response).catch(err => err)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}

// export async function getStaticPaths() {
//     const posts = await WordPressApi.posts().then(response => response).catch(err => err)

//     const paths = posts.map((product) => ({
//         params: { id: product.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

export default BlogPost
