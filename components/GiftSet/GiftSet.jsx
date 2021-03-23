import classnames from './GiftSet.module.scss'

const GiftSet = () => {
    return (
        <div className={classnames['present']}>
            <div className={classnames['present__container']}>
                <h1 className={classnames['present__header']}>Подарочный набор</h1>
                <p className={classnames['present__paragraph']}>
                    На протяжении многих лет Израиль является лидером в области передовых 
                    биотехнологий и производства натуральной косметики.
                </p>
                <button className={classnames['present__button']}>ЗАКАЗАТЬ</button>
            </div>
            <div className={classnames['present__img--container']}>
            <img src="/_next/static/media/present.png" className={classnames['present__img']}/>
            </div>
        </div>
    )
}

export default GiftSet