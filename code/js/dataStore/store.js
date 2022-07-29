/**
  * Author: Kent Madsen
  * Copyright: 2022, Kent vejrup Madsen
  * License: Mit License, 'https://github.com/KentVejrupMadsen/Game.Snake/blob/main/LICENSE.md'
  * Issues: https://github.com/KentVejrupMadsen/Game.Snake/issues
  *
  */
class Store
{
    constructor()
    {
        console.log( 'created: dataStore' );

        this.packages = Array();
    }

    static __stored = null;

    make( key )
    {
        let sizeOf = this.packages.length;
        let newPackage = new Package( sizeOf, key );

        this.packages.push( newPackage );
    }

    // Accessors
    get Packages()
    {
        return this.packages;
    }

    set Packages( array )
    {
        this.packages = array;
    }

    // global
    static getStore()
    {
        if( this.__stored == null )
        {
            this.__stored = new Store();
        }

        return this.__stored;
    }

    static setStore( store )
    {
        this.__stored = store;
    }

}