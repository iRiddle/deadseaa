import React, { Children } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath, push } = useRouter()

    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    const pushHistory = (e) => {
        e.preventDefault();
        push(props.href)
    }

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
                onClick: (e) => pushHistory(e)
            })}
        </Link>
    )
}

export default ActiveLink