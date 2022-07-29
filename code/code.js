class System
{
    constructor()
    {
        this.frame = new Frame('mainCanvas');

        this.screen = new Screen();
        
        this.mouse = new Mouse();
        this.keyboard = new Keyboard();
    }

    get Keyboard()
    {
        return this.keyboard;
    }

    set Keyboard(value)
    {
        this.keyboard = value;
    }

    get Frame()
    {
        return this.frame;
    }

    set Frame(value)
    {
        this.frame = value;
    }

}

function main()
{
    console.log( 'Script Started' );
    let system = new System();
}


window.addEventListener("load", main() );