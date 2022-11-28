import Header from "./components/Header/Header"
import SiteInfos from "./components/SiteInfos/SiteInfos"
import ServicesBox from "./components/ServicesBox/ServicesBox"
import Contacts from "./components/Contacts/Contacts"

const LandingPage = () => {

    return (
        <div>
            <Header />
            <SiteInfos />
            <ServicesBox />
            <Contacts />
        </div>
    )
}

export default LandingPage