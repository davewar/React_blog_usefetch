import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className="not-fond">
            <h2>Page can not be found</h2>
            <Link to="/">Back to the home page</Link>
        </div>
    )
}

export default Error
