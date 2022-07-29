class System
{
    constructor()
    {
        this.store = new Store();
        this.frame = new Frame('mainCanvas');

        this.stop = false;
    }

    draw()
    {

    }

    get Pause()
    {
        return this.stop;
    }

    set Pause( to )
    {
        this.stop = to;
    }

    get Store()
    {
        return this.store;
    }

    set Store( value )
    {
        this.store = value;
    }

    get Frame()
    {
        return this.frame;
    }

    set Frame( value )
    {
        this.frame = value;
    }

}

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