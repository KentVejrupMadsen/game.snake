/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  */
class Mouse
    extends InputOutput
{
    constructor()
    {
        super();
        this.debugConsole('Mouse Constructed');
    }

    // Accessors
    static getCursor()
    {
        return this.cursor;
    }

    static setCursor( Value )
    {
        if( Value instanceof Mouse )
        {
            this.cursor = Value;
        }
    }

    static cursor = null;
}

module.exports = Mouse;