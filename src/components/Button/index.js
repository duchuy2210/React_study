import button from './Button.module.scss'
import clsx from 'clsx'

function Button({ primary }) {
    return (
        <>
            <button className={clsx([button.btn],'btn',{
                'btn-primary': primary
            })}>Click Me</button>
        </>
    )
}
export  default Button;