import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA TOWN </h1>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, similique. Delectus earum at doloribus pariatur sit. Iste debitis ex sed ipsa quasi tempore nisi, harum magni, facilis aspernatur beatae at?</p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    )
}

export default PizzaList