import TaskManager from "../../components/tasks/TaskManager/TaskManager.jsx"
import NavBar from "../../components/tasks/NavBar/NavBar.jsx"

import styles from "./HomePage.module.css"

export default function HomePage() {
    return <div className = {styles.homePage}>
        <NavBar />
        <TaskManager />
    </div>
}