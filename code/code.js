class System
{
    constructor()
    {
        this.store = new Store();
        this.frame = new Frame('mainCanvas');

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


function main()
{
    console.log( 'Script Started' );
    let system = new System();
}

window.addEventListener("load", main() );