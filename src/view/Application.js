import ApplicationBox from "../components/ApplicationBox/ApplicationBox";
import Header from "../components/TopBar/Topbar"
import { useNavigate } from 'react-router-dom';

/**
 * Represents a component for the application page.
 * @param {object} props - The props object containing the component's properties.
 * @returns {JSX.Element} JSX representation of the application page component.
 */
function Application(props){
    const navigate = useNavigate();
    function changeRoleID(id){
        props.viewModel.setRoleID(id)
        navigate("/");
    }
    return(
        <div>
        <Header {...props} changeRoleID={changeRoleID}></Header>
        <ApplicationBox {...props}></ApplicationBox>
        </div>
    );
}

export default Application;
