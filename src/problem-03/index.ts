export class NodeItem {
  constructor(
    private val: string,
    private left?: NodeItem,
    private right?: NodeItem
  ) {}
}

export const serialize = (node: NodeItem) => {
  return JSON.stringify(node);
};

export const deserialize = (node: string) => {
  const root = JSON.parse(node);
  console.log(root);

  return new NodeItem(root.val, root.left, root.right);
};
