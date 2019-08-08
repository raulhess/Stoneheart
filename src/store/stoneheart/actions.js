export function startLoading ({commit}) {
    commit('setIsLoading', true)
}

export function stopLoading ({commit}) {
    commit('setIsLoading', false)
}
