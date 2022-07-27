import { useContext } from "react";
import SingleProfile from "../components/SingleProfile";
import mainContext from "../context/mainContext";

const AllUsersPage = () => {
const {users} = useContext(mainContext)

    return(
        <div className="d-flex flex-wrap">
            {users.map((x,i) => <SingleProfile image={x.image} users={x} index={i} key={x.id}/>)}
        </div>
    )
}

export default AllUsersPage;