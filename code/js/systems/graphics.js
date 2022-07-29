class Graphics
    extends InputOutput
{
    constructor( frame )
    {
        super();
        this.isFrame( frame );
        this.frame = frame;

    }

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