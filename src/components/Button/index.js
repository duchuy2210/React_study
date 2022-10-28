import button from './Button.module.css'
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