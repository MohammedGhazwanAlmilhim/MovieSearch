import {Link, Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
            <nav>
                <Link id="logo" to="/">
                    <h1>MovieSearch</h1>
                </Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}