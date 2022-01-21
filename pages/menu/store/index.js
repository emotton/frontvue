import state from "@/pages/menu/store/state";
import mutations from "@/pages/menu/storemutations";
import * as actions from "@/pages/menu/storeactions";
import * as getters from "@/pages/menu/storegetters";

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
};
