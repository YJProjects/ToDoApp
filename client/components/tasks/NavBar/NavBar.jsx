import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
    <div className = {styles.navbarContainer}>
        <a className = {styles.githubLink} href = "https://github.com/YJProjects/ToDoApp" target = "_blank">
            <img className = {styles.githubLogo} src = "../../public/github.svg"></img>
        </a>
            <div className = {styles.heading}>ToDoApp</div>
        <div className = {styles.rightGroup}>
            <div className = {styles.signUp}>SignUp</div>
            <div className = {styles.logIn}>Login</div>
        </div>
    </div>)
}