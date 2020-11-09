import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { Cart } from "../models/cart";
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

    getCart(){
        const cart = localStorage.getItem(STORAGE_KEYS.cart);
        if(cart != null)
            return JSON.parse(cart);
        else
            return null;
    }

    setCart(cart : Cart){
        if(cart != null)
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
        else
            localStorage.removeItem(STORAGE_KEYS.cart);
    }
    
}
