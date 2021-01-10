const deleteNomination = (title) => {
    return {
        type: 'DELETE_NOMINATION',
        title
    }
}

export default deleteNomination