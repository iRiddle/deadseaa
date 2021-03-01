import Link from 'next/link'

const About = ({ className }) => (
    <ul className={className}>
        <li>
            <Link href="/">
                <a>
                    Интернет-магазин
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    О нас
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Лицензии и свидетельства
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Проекты
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Партнёры
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Акции
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Оплата и доставка
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Отзывы
                </a>
            </Link>
        </li>
        <li>
            <Link href="/">
                <a>
                    Контакты
                </a>
            </Link>
        </li>
    </ul>
)

export default About