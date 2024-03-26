function Apple(props){
    return(
        <div>
            <h1>Apple</h1>
            <p>{props.message}</p> /* This prop is passed down from the invocaton of the Bag component in App.js  */
        </div>
    )
};

export default Apple;