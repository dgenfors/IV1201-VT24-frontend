import ApplicationBox from "../components/Application/ApplicationBox";

/**
 * Represents a component for the application page.
 * @param {object} props - The props object containing the component's properties.
 * @returns {JSX.Element} JSX representation of the application page component.
 */
function Application(props){
    return(
        <ApplicationBox {...props}></ApplicationBox>
    );
}

export default Application;
