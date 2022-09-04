module.exports =
{

}

const index = require( 'index.js' );

//
var system = null;


// Entry code
function main()
{
    console.log( 'Script Started' );

    system = new System();

    drawSystem();
}


function drawSystem()
{
    system.draw();

    if( !system.Pause )
    {
        window.requestAnimationFrame( drawSystem );
    }
}


// Base
window.addEventListener("load", main );