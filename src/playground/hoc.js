import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : 
                                     (<p>You are not authenicated. Please log in</p>)}
            
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are dets" />, document.getElementById('app'));R