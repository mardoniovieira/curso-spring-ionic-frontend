import { JSONP_ERR_NO_CALLBACK } from "@angular/common/http/src/jsonp";
import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";

@Injectable()
export class StorageService {
    
    getLocalUser() : LocalUser {
        const user = localStorage.getItem(STORAGE_KEYS.localUser);
        if(user == null)
            return null;
        else
            return JSON.parse(user);
    }

    setLocalUser(user : LocalUser){
        if(user == null)
            localStorage.removeItem(STORAGE_KEYS.localUser);
        else
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(user));
    }

}
