function Child(para){
    return(
        <div className="bg-info w-25 mx-auto m-1 rounded-3"> 
            <button className="btn btn-secondary m-2" onClick={para.fun}>In</button>
            <button className="btn btn-primary m-2" onClick={para.fu}>Dec</button>
        </div>
    )
}
export default Child;