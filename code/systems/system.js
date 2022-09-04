/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class System
{
    constructor()
    {
        this.store = Store.getStore();

        this.graphics = new Graphics( new Frame('mainCanvas' ) );

        this.mouse    = new Mouse();
        this.keyboard = new Keyboard();

        this.logic = new Game();

        this.stop = false;
    }

    draw()
    {

    }

    // Accessors
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