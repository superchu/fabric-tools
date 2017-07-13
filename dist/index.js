/*
 * Fabric Tools
 */
const filterContent = (content, ...types) => {
    return content.reduce((acc, node, index) => {
        if (types.indexOf(node.type) !== -1) {
            if (node.content) {
                acc.push(Object.assign({}, node, { content: filterContent(node.content, ...types) }));
            }
            else {
                acc.push(node);
            }
        }
        else if (node.content) {
            filterContent(node.content, ...types)
                .forEach(child => acc.push(child));
        }
        return acc;
    }, []);
};
export const filterContentByType = (doc, ...types) => {
    const { content } = doc;
    if (!content) {
        return [];
    }
    return filterContent(content, ...types);
};
//# sourceMappingURL=index.js.map