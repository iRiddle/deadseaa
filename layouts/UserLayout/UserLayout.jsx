import cn from 'classnames'

import Loader from '../../components/Loader'

import classnames from './UserLayout.module.scss'

const UserLayout = (props) => {
    const { className, children, onMouseEnter, onMouseLeave, isLoading, hovered } = props
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cn(classnames['user-layout'], hovered && classnames['user-layout--shown'], className)}
        >
            <div className={classnames['user-layout__container']}>
                {isLoading ? <Loader /> : children}
            </div>
        </div >
    )
}

export default UserLayout
