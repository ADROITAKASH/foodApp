import styles from './Input.module.css'

const Input = ({ input }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={input.id}>Amount:</label>
            <input {...input}></input>
        </div>

    );
}

export default Input; 