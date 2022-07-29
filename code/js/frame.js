class Frame
{
    constructor( id )
    {
        this.Document = document.getElementById( id );
        this.init();

        this.screen = new Screen();

        this.mouse = new Mouse();
        this.keyboard = new Keyboard();
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

    get Document()
    {
        return this.document;
    }

    set Document( value )
    {
        this.document = value;
    }

    get Context()
    {
        return this.context;
    }

    set Context( value )
    {
        this.context = value;
    }

    get Screen()
    {
        return this.screen;
    }

    set Screen( value )
    {
        this.screen = value;
    }

    init()
    {
        this.Context = this.document.getContext( "2d" );
    }



}