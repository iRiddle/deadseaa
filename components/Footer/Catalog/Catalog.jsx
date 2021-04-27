import Link from 'next/link'

const Catalog = ({ className }) => (
    <ul className={className}>
        <li>
            Каталог
        </li>
        <li>
            <Link href="/catalog">
                <a>
                    Для лица
                </a>
            </Link>
        </li>
        <li>
            <Link href="/catalog">
                <a>
                    Для тела
                </a>
            </Link>
        </li>
        <li>
            <Link href="/catalog">
                <a>
                    Для волос
                </a>
            </Link>
        </li>
        <li>
            <Link href="/catalog">
                <a>
                    Для мужчин
                </a>
            </Link>
        </li>
        <li>
            <Link href="/catalog">
                <a>
                    Новинки
                </a>
            </Link>
        </li>
    </ul>
)

export default Catalog