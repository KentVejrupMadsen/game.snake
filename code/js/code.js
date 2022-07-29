class System
{
    constructor()
    {
        this.store = new Store();

        this.frame = new Frame('mainCanvas' );
        this.graphics = new Graphics( this.frame );

        this.mouse    = new Mouse();
        this.keyboard = new Keyboard();

        this.logic = new GameRules();

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

    get Graphics()
    {
        return this.graphics;
    }

    set Graphics( value )
    {
        this.graphics = value;
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

    get Mouse()
    {
        return this.mouse;
    }

    set Mouse( value )
    {
        this.mouse = value;
    }

    get Keyboard()
    {
        return this.keyboard;
    }

    set Keyboard( value )
    {
        this.keyboard = value;
    }

    get Logic()
    {
        return this.logic;
    }

    set Logic( value )
    {
        this.logic = value;
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