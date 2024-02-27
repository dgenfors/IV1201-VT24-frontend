import Application from "../components/Application/Application"

function RecruiterView(props){
    const application = []
    async function getApplications(){
        props.viewModel.listOfApplications()
    }
    async function changeStatus(){
        
    }
    return <div><Application application={application}></Application>
            <button onClick={getApplications}>Load all applications</button>
            </div>
}
export default RecruiterView;