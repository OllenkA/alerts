import React from 'react';
import styles from './DescriptionTask.module.css';


const DescriptionTask = () => {
    return <article className={styles.description}>
        <p>There are 3 buttons:</p>
        <ul>
            <li>Success</li>
            <li>Warning</li>
            <li>Error</li>
        </ul>
        <p>When you click on the button, an alert with the corresponding name pops up on the right
            and after 3 seconds it disappears. </p>
        <p>If you press several buttons at once or one several times,
            Alerts are lined up and each after 3 seconds disappears with a shift up.</p>
        <p>You can see the implementation of this task here.</p>
        <div className={styles.line}/>
        <p>Есть 3 кнопки:</p>
        <ul>
            <li>Success</li>
            <li>Warning</li>
            <li>Error</li>
        </ul>
        <p>При нажатии на кнопку, справа выскакивает оповещение с соответствующим названием
            и через 3 секунды исчезает. </p>
        <p>Если нажать сразу несколько кнопок или одну несколько раз,
            оповещения выстраиваются в ряд и каждая через 3 секунды исчезает со сдвигом вверх.</p>
        <p>Реализацию этой задачи вы можете увидеть здесь.</p>
    </article>
};

export default DescriptionTask;