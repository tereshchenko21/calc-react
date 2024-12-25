import classes from './NumberButton.module.scss'

export default function NumberButton({children, onClick, number}) {
    return (
        <button className={classes.numberButton} onClick={() => onClick(number)}>{children}</button>
    )
}