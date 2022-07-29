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