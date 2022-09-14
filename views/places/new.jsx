const React = require('react')
const Def = require('../default')

function newpage() {
    return(
    <Def>
        <main>
            <h1>new place</h1>
            <form action="">
                <input type="submit" value="Submit"/>
            </form> 
        </main>
    </Def>
    )
}



module.exports = newpage