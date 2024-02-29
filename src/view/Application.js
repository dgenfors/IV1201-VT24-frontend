import ApplicationBox from "../components/ApplicationBox/ApplicationBox";
import Header from "../components/TopBar/Topbar"

/**
 * Represents a component for the application page.
 * @param {object} props - The props object containing the component's properties.
 * @returns {JSX.Element} JSX representation of the application page component.
 */
function Application(props){
    return(
        <div>
        <Header {...props}></Header>
        <ApplicationBox {...props}></ApplicationBox>
        </div>
    );
}

export default Application;
