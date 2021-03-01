import cn from 'classnames'
import Image from 'next/image'

import classnames from './Button.module.scss'

const Button = ({ text, hasIcon, className, onClick, disabled }) => (
    <button className={cn(classnames['button'], className)} onClick={onClick} disabled={disabled}>
        <div className={classnames['button__container']}>
            {hasIcon &&
                <Image
                    src="/static/open.svg"
                    alt="Мертвое море"
                    width={12}
                    height={12}
                />
            }
            <span className={cn(hasIcon && classnames['button__text'])}>{text}</span>
        </div>
    </button>
)

export default Button