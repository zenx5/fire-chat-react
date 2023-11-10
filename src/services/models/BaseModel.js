import { actionDelete, actionGet, actionGetAll, actionSave, actionSearch, onSnap } from "../firebase/actions";

export class BaseModel {
    static  tableName = ""

    static async onChange( callback, id = null ) {
        onSnap(this.tableName, callback, id )
    }

    static async get( id = null ) {
        if( id ) return await actionGet(this.tableName, id)
        return await actionGetAll(this.tableName)
    }

    static async delete(id) {
        return await actionDelete(this.tableName, id)
    }

    static async post(data) {
        return await actionSave(this.tableName, data)
    }

    static async put(id, data ) {
        return await actionSave(this.tableName, data, id)
    }

    static async search(key, value) {
        return await actionSearch(this.tableName, key, "==", value)
    }
}