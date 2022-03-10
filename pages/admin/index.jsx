import Image from "next/image";
import styles from "../../styles/Admin.module.css";

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <td>
                                <Image
                                src="/img/pizza.png"
                                width={50}
                              height={50}
                               objectFit="cover"
                                alt="pizza"
                                />
                            </td>
                            <td>PizzaId</td>
                            <td>Pizza Title</td>
                            <td>$50</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button}>Delete</button>
                            </td>
                            </tr>
                    </tbody>
                    </table>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Custumer</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <td>
                               8686755674543
                            </td>
                            <td>Jhon Doe</td>
                            <td>paid</td>
                            <td>$50</td>
                            <td>preparing</td>
                            <td>
                                <button className={styles.button}>Next Stage</button>
                                
                            </td>
                            </tr>
                    </tbody>
                    </table>
                    </div>

        </div>
    )
}
export default index