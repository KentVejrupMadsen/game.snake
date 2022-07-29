class Frame
{
    constructor( id )
    {
        this.Document = document.getElementById( id );
        this.init();
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

    init()
    {
        this.Context = this.document.getContext( "2d" );
    }



}