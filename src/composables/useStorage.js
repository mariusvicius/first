import { ref, watch } from 'vue';

export function useStorage(key, storageValue = null){

    let getStore = read();


    if(getStore){
        storageValue = ref(getStore);
    }else{
        storageValue = ref(storageValue);
        write();
    }

    watch(storageValue, write, { deep: true });

    function write(){
        if(storageValue.value === '' || storageValue.value === null){
            clear();
        }else{
            localStorage.setItem(key, JSON.stringify(storageValue.value));
        }
    }

    function read(){
        return JSON.parse(localStorage.getItem(key));
    }

    function clear(){
        localStorage.removeItem(key);
    }

    return storageValue;
}