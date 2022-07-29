class Graphics
    extends InputOutput
{
    constructor( frame )
    {
        super();
        this.debugConsole('Graphics Constructed');

        this.isFrame( frame );
        this.frame = frame;
    }

    // Accessors
    get Frame()
    {
        return this.frame;
    }

    set Frame( value )
    {
        this.isFrame( value );
        this.frame = value;
    }

    isFrame( value )
    {
        if( !( value instanceof Frame ) )
        {
            throw new Error('Wrong variable instance type.');
        }
    }
}