/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  * Represents the 'canvas area'.
  */
class Frame
{
    constructor( id )
    {
        this.Document = document.getElementById( id );
        this.init();

        this.screen = new Screen();
    }

    // Accessors
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