import {ALPHABET, COUNT} from '../const/sorts';

const sort = (arr, type) => {
    switch(type){
        case ALPHABET: {
            return arr.sort((a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        }
        case COUNT: {
            return arr.sort((a, b) => b.count - a.count);
        }
        default: return arr;
    }
}

export default sort;