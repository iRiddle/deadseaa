import cn from 'classnames'
import Image from 'next/image'

import Loader from '../Loader'

import classnames from './Button.module.scss'

const Button = ({ text, hasIcon, className, notContainer, onClick, disabled, isLoading }) => (
    <button className={cn(classnames['button'], className)} onClick={onClick} disabled={disabled || isLoading}>
        <div className={cn(classnames['button__container'], notContainer && classnames['button__container--not'])}>
            {hasIcon &&
                <Image
                    src="/static/open.svg"
                    alt="Мертвое море"
                    width={12}
                    height={12}
                />
            }
            <span className={cn(hasIcon && classnames['button__text'])}>{isLoading ? <Loader width={15} height={15} /> : text}</span>
        </div>
    </button>
)

export default Button