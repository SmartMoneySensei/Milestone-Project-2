const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated!
        </h3>
    )

    return (
        <Def>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} width="90%"/>
                </div>
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                    <h2> Rating </h2>
                    {rating}
                    <br/>
                    <h2> Description</h2>
                    <h3> Located in {data.place.city}, {data.place.state}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
            </div>
            <hr/>
            <div>
                <h2> Comments</h2>
                {comments}
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"><i class="bi bi-pencil-square"></i> Edit</a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger"><i class="bi bi-trash-fill"></i> 
                Delete
            </button>
            </form>     


        </Def>
    )
}

module.exports = show
