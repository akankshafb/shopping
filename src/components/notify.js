import React from 'react';

export default function Noify(props) {
    console.log(props);
    return (
        <div>
            <Protected user={props.user} render={() => (<h1>Welcome {props.user.name}</h1>)}>
            <div className="row">
                    <input type="text" name="email" placeholder="Please Enter Email Id"/>
                    <button>Get Notify</button>
                </div>
            </Protected>
        </div>
    );
}

function Protected({ user, render, fail,children  }) {
    if (user.name==="Akankshaa") {
        return render();
    }else{
        return children;
    }

    //return render();
}




