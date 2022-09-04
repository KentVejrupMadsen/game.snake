/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class BaseVector
{
    constructor(X, Y)
    {
        this.x = X;
        this.y = Y;
    }

    get X()
    {
        return this.x;
    }

    set X( value )
    {
        this.x = value;
    }

    get Y()
    {
        return this.y;
    }

    set Y( value )
    {
        this.y = value;
    }
}