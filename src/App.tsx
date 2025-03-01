import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/header/section/main/Main.tsx";
import {Skils} from "./layout/header/section/skils/Skils.tsx";
import {Progects} from "./layout/header/section/progects/Progects.tsx";
import {Contacts} from "./layout/header/section/contacs/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {About} from "./layout/header/section/about/About.tsx";
import {ParticalesMain} from "./components/particalesMain/ParticalesMain.tsx";

function App() {
    return (
        <div className="App">
            <ParticalesMain/>
            <Header/>
            <Main/>
            <About/>
            <Skils/>
            <Progects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App



