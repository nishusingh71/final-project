import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserStart } from '../redux/action/user.action';
import { signOut } from "firebase/auth";
import { auth } from '../firebase-config';

const Sidebar = () => {
    let currentUser = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth)

            dispatch(logoutUserStart());

            setTimeout(() => {
                navigate("/login")
            }, 1000)
        } catch (error) {

        }
    }

    return (
        <ul className="list-group">
            <li className="list-group-item active" >Sidebar</li>
            <li className="list-group-item">
                <Link to="/admin/dashboard" className={styles.link}>Dashboard</Link>
            </li>
            <li className="list-group-item">
                <Link to="/admin/order" className={styles.link}>Order</Link>
            </li>
            {currentUser.role.toLowerCase() === "admin" &&
                <>
                    <li className="list-group-item">
                        <Link to="/admin/product" className={styles.link}>Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/category" className={styles.link}>Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/user" className={styles.link}>User</Link>
                    </li>
                </>
            }
            <li className="list-group-item">
                <Link to="#" className={styles.link} onClick={logout}>Logout</Link>
            </li>
        </ul>
    )
}

export default Sidebar