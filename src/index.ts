/*
 * Fabric Tools
 */

export interface Doc {
  version: number;
  type: string;
  content: Node[];
}

export interface Node {
  type: string;
  content?: Node[];
}

const filterContent = (content: Node[], ...types: string[]) => {
  return content.reduce((acc, node, index) => {
    if (types.indexOf(node.type) !== -1) {
      if (node.content) {
        acc.push({
          ...node,
          content: filterContent(node.content, ...types)
        });
      } else {
        acc.push(node);
      }
    } else if (node.content) {
      filterContent(node.content, ...types)
        .forEach(child => acc.push(child));
    }

    return acc;
  }, [] as Node[]);
};

export const filterContentByType = (doc: Doc, ...types: string[]) => {
  const { content } = doc;

  if (!content) {
    return [];
  }

  return filterContent(content, ...types);

};
