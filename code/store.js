let gp_store = null;


class Store
{
    constructor()
    {
        console.log('created: store')
    }

    static getStore()
    {
        return gp_store;
    }

    static setStore( store )
    {
        gp_store = store;
    }

}