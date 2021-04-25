import Link from 'next/link'

const About = ({ className }) => (
    <ul className={className}>
        <li>
            <Link href="/catalog">
                <a>
                    Интернет-магазин
                </a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>
                    О нас
                </a>
            </Link>
        </li>
        <li>
            <Link href="/licence">
                <a>
                    Лицензии и свидетельства
                </a>
            </Link>
        </li>
        <li>
            <Link href="/projects">
                <a>
                    Проекты
                </a>
            </Link>
        </li>
        <li>
            <Link href="/partners">
                <a>
                    Партнёры
                </a>
            </Link>
        </li>
        <li>
            <Link href="/promotions">
                <a>
                    Акции
                </a>
            </Link>
        </li>
        <li>
            <Link href="/payment">
                <a>
                    Оплата и доставка
                </a>
            </Link>
        </li>
        <li>
            <Link href="/reviews">
                <a>
                    Отзывы
                </a>
            </Link>
        </li>
        <li>
            <Link href="/contacts">
                <a>
                    Контакты
                </a>
            </Link>
        </li>
    </ul>
)

export default About