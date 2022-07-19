import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer"
import Nav from "./components/Nav/Nav"
import ProfileContainer from "./components/Profile/ProfileContainer";
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
                <HeaderContainer/>
                <Nav/>
                <div className="App__content">
                    <Routes>
						<Route path='/Profile/:userId' element = {<ProfileContainer/>}/>
						<Route path='/Profile' element={<ProfileContainer />}/>
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












