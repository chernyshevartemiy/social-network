import './App.css';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App__content">
                    <Routes>
                        <Route path='/Profile' element = {<Profile newPostsData = {props.state.postsPage.newPostsData} postsData = {props.state.postsPage.postsData} dispatch = {props.dispatch} newPostText = {props.state.postsPage.newPostText}/>}/>
                        <Route path='/Dialogs' element ={ <Dialogs dialogsData = {props.state.dialogsPage.dialogsData} messagesData = {props.state.dialogsPage.messagesData} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;












