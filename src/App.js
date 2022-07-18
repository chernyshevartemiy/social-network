import './App.css';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import ProfileContainer from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App__content">
                    <Routes>
						<Route path='/Profile' element = {<ProfileContainer/>}/>
                        <Route path='/Dialogs' element ={<DialogsContainer/>}/>
						<Route path='/News' element={<News/>}/>
						<Route path='/Users' element={<UsersContainer/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;












