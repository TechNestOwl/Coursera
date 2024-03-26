// import Apple from "./Apple"; ** [ unused code ] Importing an inherited child prompt from here is useless **



function Bag(props){
    const bag = { /* styles to the bag component, passing it in as a prop below. */
        padding: "200px",
        border: "solid",
        // background: "grey",
    };

    return(
        <div style={bag}>
            {console.log(props.children)}
            {props.children}
        </div>
    )
}

export default Bag;